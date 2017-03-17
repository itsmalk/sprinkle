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
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderBottomRightRadius: 5,
  },
  btn: {
    flexDirection: 'row',
    height: 24,
    paddingRight: 8,
    paddingLeft: 7,
    alignItems: 'center',
    paddingBottom: 0.5,
  },
  img: {
    marginBottom: 0.5,
  },
  text: {
    marginLeft: 6,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

class ResultsRatingsButton extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.btn}
        >
          <Image
            style={styles.img}
            source={Images.RSLTS_RATINGS}
          />
          <Text style={styles.text}>3.5</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ResultsRatingsButton;
