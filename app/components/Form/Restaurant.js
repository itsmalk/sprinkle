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
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginRight: width/40,
    marginBottom: height/34,
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: 3,
    height: height/11,
  },
  btn: {
    padding: 5,
    flex: 1,
  },
  text: {
    color: '#157AFC',
    top: 0,
    left: 0,
   }
});

const mapStateToProps = state => ({
  restaurant: state.ui.post.restaurant,
});

class Restaurant extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Restaurant</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Restaurant;
