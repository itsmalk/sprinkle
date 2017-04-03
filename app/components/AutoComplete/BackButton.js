import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { setHiding } from '@/actions/autocomplete';

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 55,
    backgroundColor: '#000',
    borderRadius: 5,
  },
});

const mapStateToProps = state => ({
  photo: null,
});

const mapDispatchToProps = {
  setHiding,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class BackButton extends Component {
  _hide = () => {
    this.props.setHiding(true);
  };
  render() {
    return <TouchableOpacity style={styles.container} onPress={this._hide} />;
  }
}
