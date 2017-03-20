import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ListView,
} from 'react-native';
import PhotoCheckbox from '@/components/Post/PhotoCheckbox';
import { Colors } from '@/constants';

const height = PhotoCheckbox.height + 10

const styles = StyleSheet.create({
  container: {
    height: PhotoCheckbox.height + 10,
    backgroundColor: 'transparent',
  },
  list: {
    height: height,
  },
  content: {
    padding: 2.5,
    height: height,
  }
})

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapStateToProps = state => ({
  cameraRoll: state.camera.cameraRoll
})

@connect(mapStateToProps)
class CameraRoll extends Component {
  static height = height
  constructor(props) {
    super();
    this.state = {
      dataSource: ds.cloneWithRows(props.cameraRoll),
    };
  }

  componentDidMount() {
    this._scollToEnd({
      animated: false,
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.cameraRoll),
    })
  }

  componentDidUpdate() {
    this._scollToEnd()
  }

  _scollToEnd = (config) => {
    if (this.props.cameraRoll.length) {
      requestAnimationFrame(() => {
        this._list.scrollToEnd(config)
      })
    }
  }

  _setListRef = ref => { this._list = ref }

  _renderRow = (image) => {
    return <PhotoCheckbox image={image} />
  }

  render() {
    if (!this.props.cameraRoll.length){
      return <View style={styles.container} />
    }
    return (
      <View style={styles.container}>
        <ListView
          ref={this._setListRef}
          style={styles.list}
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
          horizontal
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          pageSize={10}
          initialListSize={1}
          removeClippedSubviews={false}
        />
      </View>
    )
  }
}

export default CameraRoll;
