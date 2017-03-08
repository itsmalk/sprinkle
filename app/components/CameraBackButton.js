import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 6,
    left: 9,
  },
  img: {
    backgroundColor: 'transparent',
  }
});

class CameraBackButton extends Component {
  _pushMapView = () => {
    Actions.map()
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushMapView}
      >
        <Image
          source={Images.BACKWARD_BTN}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default CameraBackButton;
