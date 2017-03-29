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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#F0F0F0',
    borderRadius: 3,
    height: 52,
    alignItems: 'flex-start',
  },
  btn: {
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    color: '#157AFC',
    top: 0,
    left: 0,
   }
});

class Dish extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Dish</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Dish;
