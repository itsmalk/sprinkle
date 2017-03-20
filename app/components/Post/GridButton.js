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
    left: 10,
  },
  img: {
    backgroundColor: 'transparent',
  }
});

class GridButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushPostView}
      >
        <Image
          source={Images.GRID.OFF}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default GridButton;
