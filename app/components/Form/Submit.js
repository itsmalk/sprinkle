import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(19,190,36,0.7)',
    borderRadius: 5,
    height: 52,
    aspectRatio: 1,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

class Submit extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Image source={Images.CHECK} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Submit;
