import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  CameraRoll,
} from 'react-native';
import Permissions from 'react-native-permissions';
import ImmutableListView from 'react-native-immutable-list-view';
import PhotoCheckbox from '@/components/Post/PhotoCheckbox';
import PhotoPermissions from '@/components/Post/PhotoPermissions';
import { setCameraRoll, appendCameraRoll } from '@/actions/camera';
import { setPhotoAccess, setPhotoAccessChecked } from '@/actions/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    flex: 1,
  },
  content: {
    padding: 2.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
})

const mapStateToProps = state => ({
  photoAccessChecked: state.ui.photoAccessChecked,
  photoAccess: state.ui.photoAccess,
  cameraRoll: state.cameraRoll
})

const mapDispatchToProps = {
  setCameraRoll,
  appendCameraRoll,
  setPhotoAccess,
  setPhotoAccessChecked,
}

@connect(mapStateToProps, mapDispatchToProps)
class Roll extends Component {
  componentWillMount() {
    this.props.setPhotoAccessChecked(false)
  }

  componentDidMount() {
    setTimeout(() => {
      Permissions.getPermissionStatus('photo')
        .then(response => {
          if (response === 'authorized') {
            this.props.setPhotoAccess(true)
          }
          this.props.setPhotoAccessChecked(true)
        });
    }, 450)
  }

  componentDidUpdate(prevProps) {
    this._fetchCameraRoll(prevProps)
  }

  _fetchCameraRoll = (previous) => {
    if (!previous.photoAccess && this.props.photoAccess) {
      const fetchParams = {
        first: 24,
      };
      CameraRoll.getPhotos(fetchParams)
        .then(this._storeImages)
        .catch(this._logImageError)
    }
  }

  _storeImages = data => {
    const assets = data.edges;
    const images = assets.map((asset) => asset.node.image);
    this.props.setCameraRoll(images)
  }

  _logImageError = err => {
    console.log(err);
  }

  _renderRow = (image) => {
    return <PhotoCheckbox image={image} />
  }

  render() {
    if (!this.props.photoAccessChecked) {
      return <View style={styles.container} />
    }
    if (!this.props.photoAccess) {
      return <PhotoPermissions />
    }
    return (
      <View style={styles.container}>
        <ImmutableListView
          immutableData={this.props.cameraRoll}
          style={styles.list}
          contentContainerStyle={styles.content}
          renderRow={this._renderRow}
          pageSize={10}
          initialListSize={1}
          removeClippedSubviews={false}
        />
      </View>
    )
  }
}

export default Roll;
