import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '@/constants';
import Camera from 'react-native-camera';
import GridButton from '@/components/Post/GridButton';
import FlashButton from '@/components/Post/FlashButton';

var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.BLACK,
  },
  preview: {
    width: width,
    height: width,
    backgroundColor: '#000',
  },
});

const mapStateToProps = state => ({
  swiperIndex: state.ui.post.swiperIndex,
  selectedPhoto: state.ui.post.selectedPhoto,
})

@connect(mapStateToProps, null, null, { withRef: true })
class ViewFinder extends Component {
  capture = async () => {
    return
    const img = await this._camera.capture();
  }

  _setCameraRef = ref => {
    this._camera = ref
  }

  _renderPreview = () => {
    return (
      <View style={styles.container}>
        <View style={styles.preview} />
      </View>
    )
    if (this.props.selectedPhoto) {
      return (
        <Image
          style={styles.preview}
          source={this.props.selectedPhoto}
        />
      )
    }
    return (
      <Camera
        ref={this._setCameraRef}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureAudio={false}
        keepAwake
        captureTarget={Camera.constants.CaptureTarget.disk}
        orientation={Camera.constants.Orientation.portrait}
      >
        <GridButton />
        <FlashButton />
      </Camera>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this._renderPreview() }
      </View>
    )
  }
}

export default ViewFinder;
