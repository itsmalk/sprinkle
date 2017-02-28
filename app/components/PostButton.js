import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import { Colors } from '@/constants';

class PostButton extends Component {
  _pushPostView = ()=>{
    Actions.post()
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this._pushPostView}
        >
        <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    alignItems: "center",
  },
  button: {
    height: 80,
    aspectRatio: 1,
    backgroundColor: Colors.BLUE,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default PostButton;
