import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  btn: {
    aspectRatio: 1,
    marginRight: 1,
    backgroundColor: Colors.LIGHT_BLACK,
  },
  img: {
    flex: 1,
  }
})

class PhotoCheckbox extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
      >
        <Image
          source={this.props.image}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default PhotoCheckbox
