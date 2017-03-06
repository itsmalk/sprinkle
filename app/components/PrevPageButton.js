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
    marginRight: 8,
  },
  img: {
    backgroundColor: 'transparent',
  }
});

class PrevPageButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushPostView}
      >
        <Image
          source={Images.PREV_PAGE_BTN}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default PrevPageButton;
