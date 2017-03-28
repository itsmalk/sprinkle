import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Colors, Images } from '@/constants';
import Camera from 'react-native-camera';
import GridButton from '@/components/Post/GridButton';
import FlashButton from '@/components/Post/FlashButton';
import CropButton from '@/components/Post/CropButton';
import Grid from '@/components/Post/Grid';
import { setSelectedPhoto } from '@/actions/post';
import { renderCamera, selectedPhoto } from '@/selectors/viewFinder';


var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    height: width,
    left: 0,
    right: 0,
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
  instruction: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructionText: {
    color: '#fff',
    fontWeight: '500'
  },
  instructionImage: {
    marginTop: 13
  },
});

const mapStateToProps = state => ({
  renderCamera: renderCamera(state),
  selectedPhoto: selectedPhoto(state),
  flash: state.ui.camera.flash,
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
      const torchMode = this.props.flash
        ? Camera.constants.TorchMode.on
        : Camera.constants.TorchMode.off
      return (
        <Camera
          ref={this._setCameraRef}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={false}
          keepAwake
          captureTarget={Camera.constants.CaptureTarget.disk}
          orientation={Camera.constants.Orientation.portrait}
          torchMode={torchMode}
        >
          <Grid />
          <GridButton />
          <FlashButton />
        </Camera>
      )
    }

    if (!this.props.selectedPhoto) {
      return (
        <View style={[styles.preview, styles.instruction]}>
          <Text style={styles.instructionText}>
            Swipe down here to go back
          </Text>
          <Image
            style={styles.instructionImage}
            source={Images.SWIPE_DOWN_BTN}
          />
        </View>
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
      <View style={styles.container} pointerEvents="none">
        { this._renderPreview() }
      </View>
    )
  }
}

export default ViewFinder;
