import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 15,
    marginRight: 15,
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: 5,
    height: 52,
  },
  btn: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    flex: 1,
  },
  text: {
    color: '#157AFC',
    fontSize: 11,
    fontWeight: '600',
  },
});

const mapStateToProps = state => ({
  dish: state.ui.post.dish,
});

class Dish extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Dish</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dish;
