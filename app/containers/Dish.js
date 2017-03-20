import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import { Colors } from '@/constants';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


class Dish extends Component {

  _pushDishes = () => {
    Actions.dishes()
  }

  render() {
    return (
      <BlurView blurType="xlight" blurAmount={10} style={styles.container}>
        <TouchableOpacity onPress={this._pushDishes}>
          <Text>Show Dishes</Text>
        </TouchableOpacity>
      </BlurView>
    )
  }
}

export default Dish;
