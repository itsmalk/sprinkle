import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import StarButton from '@/components/Form/StarButton';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    marginBottom: height/22,
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: 3,
    height: height/12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  }
});

class Rate extends Component {
  render() {
    return (
      <View style={styles.view}>
          { [0,1,2,3,4].map(i => <StarButton key={i} index={i}  />) }
      </View>
    )
  }
}

export default Rate;
