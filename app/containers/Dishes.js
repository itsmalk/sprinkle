import React, { Component } from 'react';
import {
  StyleSheet,
  PanResponder,
  ScrollView,
  View,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import { Colors } from '@/constants';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scroller: {
    flex: 1,
  },
  content: {
    height: 800,
    backgroundColor: 'red',
    width: 50,
  }
});


class Dishes extends Component {
  componentWillMount() {
    this._contentPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false, 
    });
  }

  render() {
    return (
      <BlurView
        blurType="xlight"
        blurAmount={10}
        style={styles.container}
      >
        <ScrollView
          style={styles.scroller}
        >
          <View
            style={styles.content}
            {...this._contentPanResponder.panHandlers}
          />
        </ScrollView>
      </BlurView>
    )
  }

  _handleStartShouldSetPanResponder = () => {
    return true
  }

  _handleMoveShouldSetPanResponder = () => {
    return true;
  }

  _handlePanResponderRequestEnd = () => {
    return false;
  }
}

export default Dishes;
