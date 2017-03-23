import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 26,
  },
  text: {
    backgroundColor: 'transparent',
  }
})

class PhotoPermissions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Enable Camera Roll</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
