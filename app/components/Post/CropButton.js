import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  NativeModules,
  Dimensions,
} from 'react-native';
import { Images } from '@/constants';
import { showCropButton, selectedPhoto } from '@/selectors/viewFinder';
import { setSelectedPhoto } from '@/actions/post';
const { ReactNativeImageCropping } = NativeModules;

const { height, width } = Dimensions.get('window');
const bottomMargin = height - width - 20 + 10;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: bottomMargin,
    right: 10.5,
  },
  img: {
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = state => ({
  showCropButton: showCropButton(state),
  selectedPhoto: selectedPhoto(state),
});

const mapDispatchToProps = {
  setSelectedPhoto,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class CropButton extends Component {
  _startCrop = () => {
    const aspectRatio = ReactNativeImageCropping.AspectRatioSquare;
    const uri = this.props.selectedPhoto.original;
    ReactNativeImageCropping.cropImageWithUrlAndAspect(uri, aspectRatio)
      .then(image => {
        this.props.setSelectedPhoto({
          ...image,
          src: 'photos',
          original: uri,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (!this.props.showCropButton) return null;
    return (
      <TouchableOpacity style={styles.button} onPress={this._startCrop}>
        <Image source={Images.CROP.OFF} style={styles.img} />
      </TouchableOpacity>
    );
  }
}
