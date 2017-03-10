import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
} from 'react-native';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import SearchBar from '@/components/MapView/SearchBar'

const miniPanelHeight = 105
const ratio = PixelRatio.get()

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  dismissButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 1 / ratio,
    borderColor: '#B2B2B2',
  },
  blur: {
    minHeight: miniPanelHeight,
  }
});

const mapStateToProps = state => ({
  searchFocused: state.ui.searchFocused,
})

@connect(mapStateToProps)
export default class Panel extends Component {
  _setSearchRef = (ref) => {
    this._searchInput = ref.input
  }

  render() {
    return (
      <View style={styles.container} pointerEvents="box-none">
        <View style={styles.dismissButton} pointerEvents="none" />
        <BlurView blurType="xlight" blurAmount={10} style={styles.blur}>
          <SearchBar
            ref={this._setSearchRef}
          />
          <KeyboardSpacer />
        </BlurView>
      </View>
    )
  }
}
