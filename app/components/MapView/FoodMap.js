import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps'
import FoodMarker from '@/components/FoodMap/FoodMarker';
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

const MARKERS = [
  {
    latlng: {
      latitude: 30.290050,
      longitude: -97.747693,
    },
    id: 1,
    color: Colors.PINK_SPRINKLE,
    title: 'Oatmeal',
    location: 'Sammy\'s Dank Oatmeal',
  },
  {
    latlng: {
      latitude: 30.285285,
      longitude: -97.746666,
    },
    id: 2,
    color: Colors.ORANGE_SPRINKLE,
    title: 'Scrambled',
    location: 'Also Sammy\'s Dank Eggs',
  },
  {
    latlng: {
      latitude: 30.283679,
      longitude: -97.74128,
    },
    id: 3,
    color: Colors.BLUE_SPRINKLE,
    title: 'Scrambled',
    location: 'Also Sammy\'s Dank Eggs',
  },
  {
    latlng: {
      latitude: 30.292,
      longitude: -97.74022,
    },
    id: 4,
    color: Colors.YELLOW_SPRINKLE,
    title: 'Scrambled',
    location: 'Also Sammy\'s Dank Eggs',
  },
  {
    latlng: {
      latitude: 30.28972,
      longitude: -97.7388,
    },
    id: 5,
    color: Colors.GREEN_SPRINKLE,
    title: 'Scrambled',
    location: 'Also Sammy\'s Dank Eggs',
  },
]

export default class FoodMap extends Component {
  render() {
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 30.286390,
          longitude: -97.740726,
          latitudeDelta: 0.022,
          longitudeDelta: 0.022,
        }}
      >
        { MARKERS.map(marker => 
            <FoodMarker
              key={marker.id}
              marker={marker}
            />
        ) }
      </MapView>
    )
  }
}
