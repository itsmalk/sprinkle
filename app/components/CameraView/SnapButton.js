import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  btnWrap: {
    height: 70,
    width: 70,
    borderWidth: 5,
    borderRadius: 35,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.BTN_RED,
  }
});

class SnapButton extends Component {
  render() {
    return (
      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.btn} onPress={this.props.capture} />
      </View>
    )
  }
}

export default SnapButton;
