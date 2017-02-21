import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Animated,
  TextInput,
} from 'react-native';

import { setSearchFocused } from '@/actions/ui';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 50,
    left: 10,
    right: 10,
    top: 25,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 18,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 18,
    borderColor: '#ECECEC',
    backgroundColor: '#fff',
    paddingTop: 3,
    shadowColor: 'rgba(223, 223, 223, 50)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
});

const mapDispatchToProps = {
  onBlur: setSearchFocused.bind(null, false),
  onFocus: setSearchFocused.bind(null, true),
}

@connect(null, mapDispatchToProps)
class SearchBar extends Component {
  render() {
    const translateY = {
      transform: [
        {
          translateY: this.props.scrollY.interpolate({
            inputRange: [0, 125],
            outputRange: [125, 0],
            extrapolate: 'clamp',
          })
        }
      ]
    }
    return (
      <Animated.View
        style={[translateY, styles.container]}
      >
        <TextInput
          style={styles.input}
          placeholder="What are you craving?"
          placeholderTextColor="#000"
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
      </Animated.View>
    )
  }
}

export default SearchBar;
