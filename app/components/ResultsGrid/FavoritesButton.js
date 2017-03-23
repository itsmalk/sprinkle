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
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderTopLeftRadius: 3,
  },
  btn: {
    flexDirection: 'row',
    height: 24,
    paddingRight: 7,
    paddingLeft: 9,
    paddingTop: 0.5,
    alignItems: 'center',
  },
  img: {
    marginTop: 1,
  },
  text: {
    marginLeft: 7,
    color: '#FFF',
    fontSize: 11,
    fontWeight: '500',
  },
});

class ResultsFavoritesButton extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.btn}
        >
          <Image
            style={styles.img}
            source={Images.RSLTS_FAVORITES}
          />
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ResultsFavoritesButton;
