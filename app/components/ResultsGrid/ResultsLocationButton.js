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
  },
  img: {
    flex: 1,
    padding: 4,
    marginBottom: 1,
    marginLeft: 5,
    marginTop: 3,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  text: {
    padding: 2,
    marginRight: 5,
    marginLeft: 2,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  view: {
    position: 'absolute',
    borderTopRightRadius: 5,
    height: 24,
    width: 40,
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
