import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  btn: {
  },
  img: {
    margin: 4,
  }
});

class SnapButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.btn} >
        <Image
          style={styles.img}
          source={Images.POST_STAR}
        />
      </TouchableOpacity>
    )
  }
}

export default SnapButton;
