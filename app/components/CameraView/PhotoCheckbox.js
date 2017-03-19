import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import { Colors } from '@/constants';

const { width } = Dimensions.get('window');
const perRow = 4
const itemWidth = (width - (5 * (perRow + 1))) / perRow;

const styles = StyleSheet.create({
  btn: {
    width: itemWidth,
    margin: 2.5,
    aspectRatio: 1,
    borderRadius: 4,
    backgroundColor: Colors.LIGHT_BLACK,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1,
  },
  content: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: Colors.BLACK,
  },
  img: {
    flex: 1,
  }
})

class PhotoCheckbox extends Component {
  static height = itemWidth
  render() {
    return (
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
      >
        <View style={styles.content}>
          <Image
            source={this.props.image}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

export default PhotoCheckbox
