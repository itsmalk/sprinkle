import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Swiper from 'react-native-swiper';
import ViewFinder from '@/components/Post/ViewFinder';
import Form from '@/components/Post/Form';
import CameraControls from '@/components/Post/CameraControls';
import CameraRoll from '@/components/Post/CameraRoll';
import CameraPermissions from '@/components/Post/CameraPermissions';
import PhotoPermissions from '@/components/Post/PhotoPermissions';
import { setSwiperIndex } from '@/actions/post';

const { height, width } = Dimensions.get('window')
const swiperHeight = height - (20 + width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 20,
  },
  page: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: 3,
    top: 9
  },
  active: {
    backgroundColor: '#000'
  },
});

const mapStateToProps = state => ({
  swiperIndex: state.ui.post.swiperIndex
})

const mapDispatchToProps = {
  setSwiperIndex
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Post extends Component {
  _capture = () => {
    this._viewFinder.capture()
  }

  _setViewFinderRef = ref => {
    if (ref) {
      this._viewFinder = ref.getWrappedInstance()
    }
  }

  _onMomentumScrollEnd = (e, state) => {
    this.props.setSwiperIndex(state.index)
  }

  render() {
    return (
      <BlurView blurType="xlight" blurAmount={10} style={styles.container}>
        <ViewFinder
          ref={this._setViewFinderRef}
        />
        <Swiper
          showsPagination={true}
          height={swiperHeight}
          loop
          bounces
          index={this.props.swiperIndex}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          dot={<View style={styles.dot}/>}
          activeDot={<View style={[styles.dot, styles.active]}/>}
        >
          <View style={styles.page}>
            <CameraControls
              capture={this._capture}
            />
            <CameraPermissions />
          </View>
          <View style={styles.page}>
            <CameraRoll />
            <PhotoPermissions />
          </View>
          <Form />
        </Swiper>
      </BlurView>
    )
  }
}
