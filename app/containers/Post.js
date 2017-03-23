import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Swiper from 'react-native-swiper';
import ViewFinder from '@/components/Post/ViewFinder';
import Form from '@/components/Post/Form';
import CameraControls from '@/components/Post/CameraControls';
import CameraRoll from '@/components/Post/CameraRoll';

const { height, width } = Dimensions.get('window')
const swiperHeight = height - (20 + width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 20,
  },
});

class Post extends Component {
  _capture = () => {
    this._viewFinder.capture()
  }

  _setViewFinderRef = ref => {
    if (ref) {
      this._viewFinder = ref.getWrappedInstance()
    }
  }
  render() {
    return (
      <BlurView blurType="xlight" blurAmount={10} style={styles.container}>
        <ViewFinder
          ref={this._setViewFinderRef}
        />
        <Swiper
          showsPagination={false}
          height={swiperHeight}
          loop
          bounces
          index={1}
        >
          <CameraControls
            capture={this._capture}
          />
          <CameraRoll />
          <Form />
        </Swiper>
      </BlurView>
    )
  }
}

export default Post;
