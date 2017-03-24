import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
import { showCropButton } from '@/selectors/viewFinder';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 8.5,
    right: 9,
   },
  img: {
    backgroundColor: 'transparent',
  }
});

const mapStateToProps = state => ({
  showCropButton: showCropButton(state)
})

@connect(mapStateToProps)
export default class CropButton extends Component {
  render() {
    if (!this.props.showCropButton) return null
    return (
      <TouchableOpacity
        style={styles.button}
      >
        <Image
          source={Images.CROP.OFF}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}
