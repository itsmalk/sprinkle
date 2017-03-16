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
    alignSelf: 'stretch'
  },
  img: {
    marginLeft: 6,
    marginTop: 7,
    marginBottom: 4,
    marginRight: 4,
    width: 14,
    height: 14,
    resizeMode: 'contain'
  },
  text: {
    marginTop: 4,
    marginRight: 5,
    marginLeft: 2,
    marginBottom: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
    height: 25,
    position: 'absolute',
    borderTopLeftRadius: 5,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
});

class ResultsFavoritesButton extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
        style={styles.button}>
          <Image
          source={Images.RSLTS_FAVORITES}
          style={styles.img}
          />
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ResultsFavoritesButton;
