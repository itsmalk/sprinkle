import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SnapButton from '@/components/Post/SnapButton';
import { cameraAccessGranted } from '@/selectors/camera';

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: width,
  },
});

const mapStateToProps = state => ({
  accessGranted: cameraAccessGranted(state),
})

@connect(mapStateToProps)
export default class CameraControls extends Component{
  render() {
    if (!this.props.accessGranted) return null
    return (
      <View style={styles.container}>
        <SnapButton
          capture={this.props.capture}
        />
      </View>
    )
  }
}
