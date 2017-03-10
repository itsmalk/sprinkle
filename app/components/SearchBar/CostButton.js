import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    backgroundColor: 'transparent',
  }
});

class CostButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushPostView}
      >
        <Image
          source={Images.COST.LOW}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default CostButton;
