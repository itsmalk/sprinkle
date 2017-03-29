import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: '#13BE24',
    borderRadius: 3,
    height: 52,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    padding: 5,
  },
  img: {

   }
});

class Dish extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Image
            style={styles.img}
            source={Images.CHECK}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Dish;
