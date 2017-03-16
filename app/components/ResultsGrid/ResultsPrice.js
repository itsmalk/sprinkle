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
  text: {
    padding: 3,
    paddingLeft: 6,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
    position: 'absolute',
    borderBottomLeftRadius: 5,
    height: 25,
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
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
