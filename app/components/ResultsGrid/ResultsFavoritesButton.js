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
    marginLeft: 7,
    marginTop: 4,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  text: {
    flex: 1,
    padding: 2,
    marginRight: 5,
    marginLeft: 2,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  view: {
    position: 'absolute',
    borderTopLeftRadius: 5,
    flex: 1,
    height: 24,
    width: 40,
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
