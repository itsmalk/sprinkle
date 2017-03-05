import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps'
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default class FoodMap extends Component {
  render() {
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}
