import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 8.5,
    right: 9,
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
