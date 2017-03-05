import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  PixelRatio,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import { Colors } from '@/constants';

const panelHeight = 400
const miniPanelHeight = 104
const ratio = PixelRatio.get()
const { height } = Dimensions.get('window')
const yDelta = panelHeight - miniPanelHeight

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  dismissButton: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  blur: {
    height: 400,
    borderWidth: 1 / ratio,
    borderColor: '#B2B2B2',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }
});

export default class Panel extends Component {
  state = {
    translateY: new Animated.Value(yDelta),
  }

  render() {
    const translateY = {
      transform: [{ translateY: this.state.translateY }]
    }
    return (
      <Animated.View style={[styles.container, translateY]} pointerEvents="box-none">
        <View style={styles.dismissButton} pointerEvents="none" />
        <BlurView blurType="xlight" blurAmount={10} style={styles.blur}>

        </BlurView>
      </Animated.View>
    )
  }
}
