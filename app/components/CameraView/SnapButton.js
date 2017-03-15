import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  btn: {
    height: 70,
    width: 70,
    borderWidth: 3,
    borderRadius: 35,
    borderColor: '#000',
    backgroundColor: 'transparent',
  }
});

class SnapButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.btn} onPress={this.props.capture} />
    )
  }
}

export default SnapButton;
