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
    flex: 1,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#F0F0F0',
    borderRadius: 3,
    height: 52,
  },
  btn: {
    padding: 5,
  },
  text: {
    color: '#157AFC',
    top: 0,
    left: 0,
   }
});

class Restaurant extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Restaurant</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Restaurant;
