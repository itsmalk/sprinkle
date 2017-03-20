import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import { Colors } from '@/constants';
import { setSelectedPhoto } from '@/actions/camera';

const { width } = Dimensions.get('window');
const perRow = 4
const itemWidth = (width - (5 * (perRow + 1))) / perRow;

const styles = StyleSheet.create({
  btn: {
    width: itemWidth,
    margin: 2.5,
    aspectRatio: 1,
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
    flex: 1,
  },
  dimmed: {
    opacity: 0.4,
  }
})

const mapStateToProps = state => ({
  selectedPhoto: state.camera.selectedPhoto
})

const mapDispatchToProps = {
  setSelectedPhoto
}

@connect(mapStateToProps, mapDispatchToProps)
class PhotoCheckbox extends Component {
  static height = itemWidth

  _setSelectedPhoto = () => {
    const {
      selectedPhoto,
      image,
    } = this.props;
    if (!selectedPhoto || (selectedPhoto.uri !== image.uri)) {
      this.props.setSelectedPhoto(image);
    }
    else {
      this.props.setSelectedPhoto(null);
    }
  }

  render() {
    const {
      selectedPhoto,
      image,
    } = this.props;
    const dimmed = (selectedPhoto && (selectedPhoto.uri !== image.uri))
    const img = dimmed
      ? [styles.img, styles.dimmed]
      : styles.img
    return (
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={this._setSelectedPhoto}
      >
        <View style={styles.content}>
          <Image
            source={this.props.image}
            style={img}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

export default PhotoCheckbox
