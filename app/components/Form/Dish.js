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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: height/34,
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: 3,
    height: height/11,
  },
  btn: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-start',
    flex: 1,
  },
  text: {
    color: '#157AFC',
    top: 0,
    left: 0,
   }
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
    )
  }
}

export default Dish;
