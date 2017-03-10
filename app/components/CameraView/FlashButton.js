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
    bottom: 10,
    right: 14,
   },
  img: {
    backgroundColor: 'transparent',
  }
});

class FlashButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushPostView}
      >
        <Image
          source={Images.FLASH.OFF}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default FlashButton;
