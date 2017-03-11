import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 13,
    height: 2,
  },
  bar: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 1,
    backgroundColor: '#32006F',
  },
});

export default class MenuIcon extends Component {
  state = {
    opacity: new Animated.Value(1),
    translateTop: new Animated.Value(-3),
    translateBottom: new Animated.Value(3),
    rotateTop: new Animated.Value(0),
    rotateBottom: new Animated.Value(0),
  }
  componentDidUpdate(prevProps) {
    this._animateIcon(prevProps.show)
  }
  
  _animateIcon = (prevShow) => {
    if (prevShow !== this.props.show) {
      let to
      if (this.props.show) {
        to = {
          opacity: 0,
          translateTop: 0,
          translateBottom: 0,
          rotateTop: 45,
          rotateBottom: -45,
        }
      }
      else {
        to = {
          opacity: 1,
          translateTop: -3,
          translateBottom: 3,
          rotateTop: 0,
          rotateBottom: 0,
        }
      }
      Animated.parallel([
        Animated.timing(
          this.state.translateTop,
          { 
            toValue: to.translateTop,
            duration: 200,
          },
          { useNativeDriver: true }
        ),
        Animated.timing(
          this.state.translateBottom,
          { 
            toValue: to.translateBottom,
            duration: 200,
          },
          { useNativeDriver: true }
        ),
        Animated.timing(
          this.state.opacity,
          { 
            toValue: to.opacity ,
            duration: 200,
          },
          { useNativeDriver: true }
        ),
        Animated.timing(
          this.state.rotateTop,
          { 
            toValue: to.rotateTop,
            duration: 200,
          },
          { useNativeDriver: true }
        ),
        Animated.timing(
          this.state.rotateBottom,
          { 
            toValue: to.rotateBottom,
            duration: 200,
          },
          { useNativeDriver: true }
        )
      ]).start()
    }
  }

  render() {
    const {
      opacity,
      translateTop,
      rotateTop,
      translateBottom,
      rotateBottom,
    } = this.state;
    const top = {
      transform: [
        { translateY: translateTop },
        { rotate: rotateTop.interpolate({
          inputRange: [0, 45],
          outputRange: [
            '0deg', '45deg'
          ],
        })},
      ]
    }
    const middle = {
      opacity: opacity,
    }
    const bottom = {
      transform: [
        { translateY: translateBottom },
        { rotate: rotateBottom.interpolate({
          inputRange: [-45, 0],
          outputRange: [
            '-45deg', '0deg'
          ],
        })},
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.bar, top]} />
        <Animated.View style={[styles.bar, middle]} />
        <Animated.View style={[styles.bar, bottom]} />
      </View>
    )
  }
}
