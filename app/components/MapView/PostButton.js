import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
import Permissions from 'react-native-permissions';
import { setRender } from '@/actions/cameraRoll';
import { setPermission as setPhotoPermission } from '@/actions/cameraRoll'
import { setPermission as setCameraPermission } from '@/actions/camera'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 6,
    right: 9,
  },
  img: {
    backgroundColor: 'transparent',
  }
});

const mapDispatchToProps = {
  setRender,
  setPhotoPermission,
  setCameraPermission,
}

@connect(null, mapDispatchToProps)
export default class PostButton extends Component {
  _pushPostView = () => {
    this.props.setRender(false)
    Permissions.checkMultiplePermissions(['camera', 'photo'])
      .then(response => {
        this.props.setCameraPermission(response.camera)
        this.props.setPhotoPermission(response.photo)
        Actions.post()
      });
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushPostView}
      >
        <Image
          source={Images.CAM_BTN}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}
