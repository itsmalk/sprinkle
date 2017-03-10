import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import RatingsButton from '@/components/SearchBar/RatingsButton'
import CostButton from '@/components/SearchBar/CostButton'
import LocationButton from '@/components/SearchBar/LocationButton'

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  bg: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#C9C9C940',
    overflow: 'hidden',
  },
  inputWrap: {
    flex: 1,
    height: 40,
  },
  input: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 12,
    fontSize: 16,
    height: 40,
  },
  actions: {
    width: 90,
    marginRight: 5,
    flexDirection: 'row',
  }
});

class SearchBar extends Component {
  _setInputRef = (ref) => {
    this.input = ref
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bg}>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="What are you craving?"
              placeholderTextColor="#5E5E5E"
              ref={this._setInputRef}
              returnKeyType="done"
              autoCorrect={false}
            />
          </View>
          <View style={styles.actions}>
            <RatingsButton />
            <CostButton />
            <LocationButton />
          </View>
        </View>
      </View>
    )
  }
}

export default SearchBar;
