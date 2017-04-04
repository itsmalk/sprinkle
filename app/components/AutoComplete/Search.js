import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { BlurView } from 'react-native-blur';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
  },
  blur: {
    height: 35 + 55 + 15,
  },
  placeholder: {
    position: 'absolute',
    top: 45,
    left: 20,
    color: '#157AFC',
    fontSize: 11,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 48,
  },
});

const mapStateToProps = state => ({
  swiperIndex: state.ui.autocomplete.swiperIndex,
});

@connect(mapStateToProps, null, null, { withRef: true })
export default class DishSearch extends Component {
  _setInputRef = ref => {
    this._input = ref;
  };

  focus = () => {
    this._input.focus();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <BlurView blurType="xlight" blurAmount={10} style={styles.blur}>
            <TextInput
              placeholder={this.props.placeholder}
              style={styles.input}
              returnKeyType="done"
              autoFocus
              value={this.props.value}
              onChangeText={this._onChange}
              ref={this._setInputRef}
              blurOnSubmit={false}
            />
            <Text style={styles.placeholder} pointerEvents="none">
              {this.props.header}
            </Text>
          </BlurView>
        </View>
      </View>
    );
  }
}
