import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { setVisible } from '@/actions/autocomplete';

const styles = StyleSheet.create({
  view: {
    flex: 1,
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
  restaurant: state.ui.post.restaurant,
});

const mapDispatchToProps = {
  setVisible,
};

@connect(mapStateToProps, mapDispatchToProps)
class Restaurant extends Component {
  _pushAutocomplete = () => {
    this.props.setVisible(true);
  };
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn} onPress={this._pushAutocomplete}>
          <Text style={styles.text}>Restaurant</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Restaurant;
