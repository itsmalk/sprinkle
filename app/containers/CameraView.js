import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Colors } from '@/constants';
import Camera from 'react-native-camera';
import GridButton from '@/components/GridButton';
import FlashButton from '@/components/FlashButton';

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

class CameraView extends Component {
  render() {
    return (
      <View style={styles.container}>
      <GridButton />
      <FlashButton />
      <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
    )
  }
}

export default CameraView;
