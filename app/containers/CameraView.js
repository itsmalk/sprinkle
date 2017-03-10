import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '@/constants';
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
    backgroundColor: Colors.LIGHT_BLACK,
  },
  preview: {
    width: width,
    aspectRatio: 1,
  },
  actions: {
    flex: 1,
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
      <View style={styles.container}>
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
        <CameraRoll />
        <View style={styles.actions}>
          <NextButton />
          <SnapButton
            capture={this._takePhoto}
          />
        </View>
      </View>
    )
  }
}

export default CameraView;
