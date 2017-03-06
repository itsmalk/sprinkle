import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MapView from 'react-native-maps'
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  marker: {
    height: 31,
    width: 31,
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  rank: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: 1,
    paddingBottom: 1,
    paddingRight: 2,
    borderBottomRightRadius: 2,
  },
  rankText: {
    fontSize: 11,
    color: Colors.WHITE,
    fontWeight: '700',
  }
});

export default class FoodMarker extends Component {
  _onPress = () => {
    console.log(this.props.marker.id)
  }
  render() {
    const { marker } = this.props;
    const style = [styles.marker, {
      borderColor: marker.color,
    }]
    const rankStyle = [styles.rank, {
      backgroundColor: marker.color,
    }]
    return (
      <MapView.Marker coordinate={marker.latlng} onPress={this._onPress}>
        <View style={style}>
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
