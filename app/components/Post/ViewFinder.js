import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '@/constants';
import Camera from 'react-native-camera';
import GridButton from '@/components/Post/GridButton';
import FlashButton from '@/components/Post/FlashButton';
import CropButton from '@/components/Post/CropButton';
import { setSelectedPhoto } from '@/actions/post';
import { renderCamera, selectedPhoto } from '@/selectors/viewFinder';

var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.BLACK,
  },
  preview: {
    width: width,
    height: width,
    backgroundColor: '#000',
  },
});

const mapStateToProps = state => ({
  renderCamera: renderCamera(state),
  selectedPhoto: selectedPhoto(state),
})

const mapDispatchToProps = {
  setSelectedPhoto
}

@connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })
class ViewFinder extends Component {
  capture = async () => {
    if (this.props.renderCamera) {
      const img = await this._camera.capture();
      this.props.setSelectedPhoto({
        uri: img.path,
        src: 'camera'
      })
    }
    else {
      this.props.setSelectedPhoto(null)
    }
  }

  _setCameraRef = ref => {
    this._camera = ref
  }

  _renderPreview = () => {
    if (this.props.renderCamera) {
      return (
        <Camera
          ref={this._setCameraRef}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={false}
          keepAwake
          captureTarget={Camera.constants.CaptureTarget.disk}
          orientation={Camera.constants.Orientation.portrait}
        >
          <GridButton />
          <FlashButton />
        </Camera>
      )
    }
    return (
      <Image
        style={styles.preview}
        source={this.props.selectedPhoto}
      >
        <CropButton />
      </Image>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this._renderPreview() }
      </View>
    )
  }
}

export default ViewFinder;
