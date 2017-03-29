import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import StarButton from '@/components/Form/StarButton';

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    marginBottom: 20,
    marginRight: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 3,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  },
});

class Dish extends Component {
  render() {
    if (this.props.index + 1 <= this.props.stars) {

    }
    return (
      <View style={styles.view}>
          { [0,1,2,3,4].map(i => <StarButton key={i} index={i}  />) }
      </View>
    )
  }
}

export default Dish;
