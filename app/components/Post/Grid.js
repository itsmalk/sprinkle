import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')
const lineMargin = (width - 2) / 3

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  bar: {
    backgroundColor: 'yellow',
  },
  horizontal: {
    left: 0,
    right: 0,
    height: 1,
  },
  topBar: {
    top: lineMargin,
  },
  bottomBar: {
    bottom: lineMargin,
  },
  vertical: {
    top: 0,
    bottom: 0,
    width: 1,
  },
  leftBar: {
    left: lineMargin,
  },
  rightBar: {
    right: lineMargin,
  },
})

const mapStateToProps = state => ({
  grid: state.ui.camera.grid
})

@connect(mapStateToProps)
export default class Grid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[
          styles.bar,
          styles.vertical,
          styles.leftBar
        ]} />
        <View style={[
          styles.bar,
          styles.vertical,
          styles.rightBar
        ]} />
        <View style={[
          styles.bar,
          styles.horizontal,
          styles.topBar
        ]} />
        <View style={[
          styles.bar,
          styles.horizontal,
          styles.bottomBar
        ]} />
      </View>
    )
  }
}
