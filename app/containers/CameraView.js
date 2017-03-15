import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '@/constants';
import { BlurView } from 'react-native-blur';
import Camera from 'react-native-camera';
import CameraRoll from '@/components/CameraView/CameraRoll';
import GridButton from '@/components/CameraView/GridButton';
import FlashButton from '@/components/CameraView/FlashButton';
import NextButton from '@/components/CameraView/NextButton';
import SnapButton from '@/components/CameraView/SnapButton';
import { appendCameraRoll } from '@/actions/camera';

var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
  preview: {
    width: width,
    aspectRatio: 1,
  },
  previewBorder: {
    height: 1,
    backgroundColor: Colors.BLACK,
  },
  actions: {
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapDispatchToProps = {
  appendCameraRoll
}

@connect(null, mapDispatchToProps)
class CameraView extends Component {
  _takePhoto = async () => {
    const img = await this.camera.capture();
    this.props.appendCameraRoll({
      uri: img.path
    });
  }
  render() {
    return (
      <BlurView blurType="light" blurAmount={10} style={styles.container}>
        <View style={styles.previewBorder} />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
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
        <View style={styles.previewBorder} />
        <CameraRoll />
        <View style={styles.actions}>
          <NextButton />
          <SnapButton
            capture={this._takePhoto}
          />
        </View>
      </BlurView>
    )
  }
}

export default CameraView;
