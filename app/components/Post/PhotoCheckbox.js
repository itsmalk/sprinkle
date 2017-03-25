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
const perRow = 4
const itemWidth = (width - (5 * (perRow + 1))) / perRow;

const styles = StyleSheet.create({
  btn: {
    width: itemWidth,
    margin: 2.5,
    height: itemWidth,
    borderRadius: 4,
    backgroundColor: Colors.BLACK,
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
    width: itemWidth - 1,
    height: itemWidth - 1,
  },
})

const mapStateToProps = state => ({
  selectedPhoto: state.ui.post.selectedPhoto
})

const mapDispatchToProps = {
  setSelectedPhoto
}

@connect(mapStateToProps, mapDispatchToProps)
class PhotoCheckbox extends Component {
  static height = itemWidth

  _selectPhoto = () => {
    const aspectRatio = ReactNativeImageCropping.AspectRatioSquare;
    const {
      image: {
        uri
      }
    } = this.props;
    ReactNativeImageCropping
      .cropImageWithUrlAndAspect(uri, aspectRatio)
      .then(image => {
        this.props.setSelectedPhoto({
          ...image,
          src: 'photos',
          original: uri,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

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
          <Image
            source={image}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

export default PhotoCheckbox
