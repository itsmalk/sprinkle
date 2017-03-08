import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '@/constants';
import Camera from 'react-native-camera';
import CameraRoll from '@/components/CameraView/CameraRoll';
import GridButton from '@/components/GridButton';
import FlashButton from '@/components/FlashButton';
import CameraNextButton from '@/components/CameraNextButton';
import CameraBackButton from '@/components/CameraBackButton';
import SnapButton from '@/components/SnapButton';
import { appendCameraRoll } from '@/actions/camera';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  preview: {
    width: width,
    aspectRatio: 1,
  },
});

const mapDispatchToProps = {
  appendCameraRoll
}

@connect(null, mapDispatchToProps)
class CameraView extends Component {
  _takePhoto = async () => {
    const img = await this.camera.capture();
    this.props.appendCameraRoll(img.path);
  } 
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <GridButton />
          <FlashButton />
        </Camera>
        <CameraRoll />
        <CameraNextButton />
        <CameraBackButton />
        <SnapButton />
      </View>
    )
  }
}

export default CameraView;
