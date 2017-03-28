import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')
const lineMargin = ((width) / 3)

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  bar: {
    backgroundColor: '#FFCA1F',
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
    top: lineMargin * 2,
  },
  rotate: {
    transform: [
      { rotate: '90deg' }
    ]
  }
})

const mapStateToProps = state => ({
  grid: state.ui.camera.grid
})

@connect(mapStateToProps)
export default class Grid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
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
        <View style={[styles.container, styles.rotate]}>
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
      </View>
    )
  }
}
