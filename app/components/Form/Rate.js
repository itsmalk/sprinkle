import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';
import StarButton from '@/components/Form/StarButton';

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: 5,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 10.5,
  },
});

class Rate extends Component {
  render() {
    return (
      <View style={styles.view}>
        {[0, 1, 2, 3, 4].map(i => <StarButton key={i} index={i} />)}
      </View>
    );
  }
}

export default Rate;
