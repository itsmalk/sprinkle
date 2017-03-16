import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  img: {
    marginLeft: 6,
    marginTop: 5,
    marginBottom: 2,
    width: 14,
    height: 14,
    resizeMode: 'contain'
  },
  text: {
    marginTop: 4,
    marginRight: 7,
    marginLeft: 3,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
    height: 25,
    position: 'absolute',
    borderTopRightRadius: 5,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
});

class ResultsLocationButton extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
        style={styles.button}>
          <Image
          source={Images.RSLTS_LOCATION}
          style={styles.img}
          />
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ResultsLocationButton;
