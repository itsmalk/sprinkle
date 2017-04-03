import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { BlurView } from 'react-native-blur';
import { setAutocompleteHiding } from '@/actions/autocomplete';

const { height } = Dimensions.get('window');
const contentHeight = height + 40;

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  content: {
    height: contentHeight,
    backgroundColor: 'transparent',
  },
  titleBar: {
    height: 125,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
  },
});

const mapStateToProps = state => ({
  visible: state.ui.autocomplete.visible,
  hiding: state.ui.autocomplete.hiding,
});

const mapDispatchToProps = {
  setAutocompleteHiding,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Autocomplete extends Component {
  _opacity = new Animated.Value(0);
  _translateY = new Animated.Value(0);

  componentDidUpdate(previous) {
    this._animate(previous);
  }

  componentWillUnmount() {
    this.props.setAutocompleteHiding(false);
  }

  _animate = previous => {
    if (!previous.visible && this.props.visible) {
      this._fadeIn();
    } else if (this.props.hiding && !previous.hiding) {
      this._hide();
    }
  };

  _fadeIn = () => {
    Animated.parallel([
      Animated.timing(
        this._opacity,
        {
          toValue: 1,
          duration: 250,
        },
        { useNativeDriver: true },
      ),
      Animated.timing(
        this._translateY,
        {
          toValue: -40,
          duration: 250,
        },
        { useNativeDriver: true },
      ),
    ]).start();
  };

  _hide = () => {
    Animated.parallel([
      Animated.timing(
        this._opacity,
        {
          toValue: 0,
          duration: 250,
        },
        { useNativeDriver: true },
      ),
      Animated.timing(
        this._translateY,
        {
          toValue: 0,
          duration: 250,
        },
        { useNativeDriver: true },
      ),
    ]).start();
  };

  render() {
    const pointerEvents = this.props.visible ? 'auto' : 'none';
    const bgStyle = { opacity: this._opacity };
    const contentStyle = {
      transform: [{ translateY: this._translateY }],
    };
    return (
      <AnimatedBlurView
        blurType="light"
        blurAmount={20}
        style={[styles.container, bgStyle]}
        pointerEvents={pointerEvents}
      >
        <Animated.View style={[styles.content, contentStyle]}>
          <View style={styles.titleBar} />
        </Animated.View>
      </AnimatedBlurView>
    );
  }
}
