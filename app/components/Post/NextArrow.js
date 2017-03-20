import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    backgroundColor: '#000',
  }
});

class NextButton extends Component {
  _onPress = () => {
    this.props.navigator.dismissModal()
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._onPress}
      >
        <Image
          source={Images.FORWARD_BTN}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default NextButton;
