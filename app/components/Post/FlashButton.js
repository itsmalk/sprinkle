import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
import { setFlash } from '@/actions/camera';

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
  flash: state.ui.camera.flash
})

const mapDispatchToProps = {
  setFlash
}

@connect(mapStateToProps, mapDispatchToProps)
class FlashButton extends Component {
  _toggleFlash = () => {
    this.props.setFlash(!this.props.flash)
  }
  render() {
    const img = this.props.flash
      ? Images.FLASH.ON
      : Images.FLASH.OFF
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._toggleFlash}
      >
        <Image
          source={img}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default FlashButton;
