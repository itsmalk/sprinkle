import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 0.5,
    marginLeft: 10.5,
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
  price: state.ui.post.price,
});

class Price extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Price</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Price;
