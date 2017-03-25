import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderBottomLeftRadius: 3,
    height: 24,
    paddingRight: 7,
    paddingLeft: 8,
    paddingBottom: 0.5,
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '500',
  },
});

class ResultsFavoritesButton extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>$3.99</Text>
      </View>
    )
  }
}

export default ResultsFavoritesButton;
