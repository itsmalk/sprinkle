import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - 22,
    bottom: 6
  },
  img: {
    backgroundColor: 'transparent',
  }
});

class SnapButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.capture}
      >
        <Image
          source={Images.SNAP_BTN}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default SnapButton;
