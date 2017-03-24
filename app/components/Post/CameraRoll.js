import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import ImmutableListView from 'react-native-immutable-list-view';
import PhotoCheckbox from '@/components/Post/PhotoCheckbox';
import { photoAccessGranted } from '@/selectors/cameraRoll';
import { setRender, refresh } from '@/actions/cameraRoll';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    flex: 1,
  },
  content: {
    padding: 2.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
})

const mapStateToProps = state => ({
  refreshing: state.ui.cameraRoll.refreshing,
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
      setTimeout(() => {
        this.props.setRender(true)
        this.props.refresh()
      }, 500)
    }
  }

  componentDidUpdate(previous) {
    if (!previous.accessGranted && this.props.accessGranted) {
      this.props.setRender(true)
      this.props.refresh()
    }
  }

  _renderRow = (image) => {
    return <PhotoCheckbox image={image} />
  }

  _onRefresh = () => {
    this.props.refresh()
  }

  render() {
    if (!this.props.render) return null
    const refreshing = !!(this.props.refreshing && this.props.cameraRoll.size)
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
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      </View>
    )
  }
}

export default Roll;
