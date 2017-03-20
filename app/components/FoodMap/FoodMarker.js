import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps'
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  marker: {
    height: 31,
    width: 31,
    padding: 1.5,
    borderRadius: 4,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  frame:{
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: 3,
  },
  rank: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 2,
    paddingBottom: 1,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 4,
  },
  rankText: {
    fontSize: 11,
    color: Colors.WHITE,
    fontWeight: '700',
  }
});

export default class FoodMarker extends Component {
  _onPress = () => {
    Actions.dish()
  }
  render() {
    const { marker } = this.props;
    const style = [styles.marker, {
      backgroundColor: marker.color,
    }]
    const rankStyle = [styles.rank, {
      backgroundColor: marker.color,
    }]
    return (
      <MapView.Marker coordinate={marker.latlng} onPress={this._onPress}>
        <View style={style}>
          <View style={styles.frame} />
          <View style={rankStyle}>
            <Text style={styles.rankText}>
              {marker.id}
            </Text>
          </View>
        </View>
      </MapView.Marker>
    )
  }
}
