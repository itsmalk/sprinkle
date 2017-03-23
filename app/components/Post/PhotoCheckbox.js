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
  selectedPhoto: state.selectedPhoto
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
      image,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={this._setSelectedPhoto}
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
