import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  View,
  NativeModules,
} from 'react-native';
import { Colors } from '@/constants';
import { setSelectedPhoto } from '@/actions/post';
const { ReactNativeImageCropping } = NativeModules;

const { width } = Dimensions.get('window');
const perRow = 4;
const itemWidth = (width - 3) / perRow;

const styles = StyleSheet.create({
  btn: {
    width: itemWidth,
    height: itemWidth,
    backgroundColor: Colors.BLACK,
    margin: 0.5,
  },
  content: {
    flex: 1,
  },
  img: {
    width: itemWidth,
    height: itemWidth,
  },
});

const mapStateToProps = state => ({
  selectedPhoto: state.ui.post.selectedPhoto,
});

const mapDispatchToProps = {
  setSelectedPhoto,
};

@connect(mapStateToProps, mapDispatchToProps)
class PhotoCheckbox extends Component {
  static height = itemWidth;

  _selectPhoto = () => {
    const aspectRatio = ReactNativeImageCropping.AspectRatioSquare;
    const {
      image: {
        uri,
      },
    } = this.props;
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
    const {
      image,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={this._selectPhoto}
      >
        <View style={styles.content}>
          <Image source={image} style={styles.img} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default PhotoCheckbox;
