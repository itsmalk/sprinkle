import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Swiper from 'react-native-swiper';
import CameraView from '@/containers/CameraView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

class Post extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    screenBackgroundColor: 'transparent',
    modalPresentationStyle: 'overCurrentContext',
  }

  render() {
    return (
      <BlurView blurType="xlight" blurAmount={10} style={styles.container}>
        <Swiper
          showsPagination={false}
          loop={false}
          bounces={true}
        >
          <CameraView />
          <View style={styles.container} />
        </Swiper>
      </BlurView>
    )
  }
}

export default Post;
