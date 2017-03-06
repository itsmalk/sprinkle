import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PixelRatio,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';
import SearchBar from '@/components/SearchBar'

const panelHeight = 350
const miniPanelHeight = 105
const ratio = PixelRatio.get()
const yDelta = panelHeight - miniPanelHeight

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
    height: panelHeight,
  }
});

const mapStateToProps = state => ({
  searchFocused: state.ui.searchFocused,
})

@connect(mapStateToProps)
export default class Panel extends Component {
  state = {
    translateY: new Animated.Value(yDelta),
  }

  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
  }

  componentWillUnmount () {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  _keyboardWillShow = (e) => {
    const kbHeight = e.endCoordinates.height;
    this._animatePanel(kbHeight)
  }

  _keyboardWillHide = () => {
    const kbHeight = 0;
    this._animatePanel(kbHeight)
  }

  _animatePanel = (kbHeight) => {
    let to;
    if (kbHeight) {
      to = yDelta - kbHeight + 50;
    }
    else {
      to = yDelta;
    }
    Animated.timing(
      this.state.translateY,
      {
        toValue: to,
        duration: 230,
      },
      { useNativeDriver: true },
    ).start();
  }

  _setSearchRef = (ref) => {
    this._searchInput = ref.getWrappedInstance().input
  }

  render() {
    const translateY = {
      transform: [{ translateY: this.state.translateY }]
    }
    return (
      <Animated.View style={[styles.container, translateY]} pointerEvents="box-none">
        <View style={styles.dismissButton} pointerEvents="none" />
        <BlurView blurType="xlight" blurAmount={10} style={styles.blur}>
          <SearchBar
            ref={this._setSearchRef}
          />
        </BlurView>
      </Animated.View>
    )
  }
}
