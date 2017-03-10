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
    right: 9,
  },
  img: {
    backgroundColor: 'transparent',
  }
});

class PostButton extends Component {
  _pushPostView = () => {
    Actions.post()
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushPostView}
      >
        <Image
          source={Images.CAM_BTN}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default PostButton;
