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
  view: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderTopRightRadius: 3,
  },
  btn: {
    flexDirection: 'row',
    height: 24,
    paddingRight: 8,
    paddingLeft: 9,
    paddingTop: 0.5,
    alignItems: 'center',
  },
  img: {
    marginBottom: 0.5,
  },
  text: {
    marginLeft: 7,
    color: '#FFF',
    fontSize: 11,
    fontWeight: '500',
  },
});

class ResultsLocationButton extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.btn}
        >
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
