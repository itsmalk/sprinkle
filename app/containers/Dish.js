import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@/constants';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


class Dish extends Component {

  _pop = () => {
    Actions.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
        <TouchableOpacity onPress={this._pop}>
          <Text style={{color: 'blue'}}>I'm scared -- take me back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Dish;
