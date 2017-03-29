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
    marginRight: 10,
    backgroundColor: '#F0F0F0',
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
    margin: 1,
   }
});

class Dish extends Component {
  _onPress = () => {
    this.props.setLiked(!this.props.liked)
  }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.btn}
          onPress={this._onPress}
          >
          <Image
            style={styles.img}
            source={Images.POST_LIKE}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Dish;
