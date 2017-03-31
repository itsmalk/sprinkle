import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { Images } from '@/constants';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    marginBottom: height/22,
    backgroundColor: 'rgba(19,190,36,0.7)',
    borderRadius: 3,
    height: height/12,
    aspectRatio: 1,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

class Submit extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Image
            source={Images.CHECK}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Submit;
