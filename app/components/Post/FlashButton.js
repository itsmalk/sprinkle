import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Images } from '@/constants';
import { setFlash } from '@/actions/camera';
import { renderCamera } from '@/selectors/viewFinder';

const { height, width } = Dimensions.get('window');

const bottomMargin = height - width - 20 + 8.5;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: bottomMargin,
    right: 9,
  },
  img: {
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = state => ({
  renderCamera: renderCamera(state),
  flash: state.ui.camera.flash,
});

const mapDispatchToProps = {
  setFlash,
};

@connect(mapStateToProps, mapDispatchToProps)
class FlashButton extends Component {
  _toggleFlash = () => {
    this.props.setFlash(!this.props.flash);
  };
  render() {
    if (!this.props.renderCamera) return null;
    const img = this.props.flash ? Images.FLASH.ON : Images.FLASH.OFF;
    return (
      <TouchableOpacity style={styles.button} onPress={this._toggleFlash}>
        <Image source={img} style={styles.img} />
      </TouchableOpacity>
    );
  }
}

export default FlashButton;
