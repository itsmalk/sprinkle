import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    height: 120,
    aspectRatio: 1,
    marginRight: 1,
  },
  img: {
    flex: 1,
  }
})

class PhotoCheckbox extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Image
          source={this.props.image}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default PhotoCheckbox
