import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ImmutableListView from 'react-native-immutable-list-view';
import RNPhotosFramework from 'react-native-photos-framework';
import PhotoCheckbox from '@/components/Post/PhotoCheckbox';
import { photoAccessGranted } from '@/selectors/cameraRoll';
import { setRender, refresh } from '@/actions/cameraRoll';

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: width,
  },
  list: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
})

const mapStateToProps = state => ({
  render: state.ui.cameraRoll.render,
  accessGranted: photoAccessGranted(state),
  cameraRoll: state.cameraRoll,
})

const mapDispatchToProps = {
  setRender,
  refresh,
}

@connect(mapStateToProps, mapDispatchToProps)
class Roll extends Component {
  componentDidMount() {
    if (this.props.accessGranted) {
      setTimeout(this._displayPhotos, 450)
    }
  }

  componentDidUpdate(previous) {
    if (!previous.accessGranted && this.props.accessGranted) {
      this._displayPhotos()
    }
  }

  componentWillUnmount() {
    this._stopWatchingPhotos()
  }

  _displayPhotos = () => {
    this.props.setRender(true)
    this.props.refresh()
    this._unwatchLibrary = RNPhotosFramework.onLibraryChange(() => {
      this.props.refresh()
    });
  }

  _stopWatchingPhotos = () => {
    if (this._unwatchLibrary) this._unwatchLibrary.then(emitter => {
      emitter.remove()
    })
  }

  _renderRow = (image) => {
    return <PhotoCheckbox image={image} />
  }

  render() {
    if (!this.props.render) return null
    return (
      <View style={styles.container}>
        <ImmutableListView
          immutableData={this.props.cameraRoll}
          style={styles.list}
          contentContainerStyle={styles.content}
          renderRow={this._renderRow}
          pageSize={10}
          initialListSize={1}
          removeClippedSubviews={false}
        />
      </View>
    )
  }
}

export default Roll;
