import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PixelRatio,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';
import { showPanel } from '@/selectors/panel'
import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'
import { setShowPanel } from '@/actions/ui';

const panelHeight = 450
const miniPanelHeight = 104
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
  },
  blur: {
    height: panelHeight,
    borderWidth: 1 / ratio,
    borderColor: '#B2B2B2',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }
});

const mapStateToProps = state => ({
  showPanel: showPanel(state),
})

const mapDispatchToProps = {
  setShowPanel,
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Panel extends Component {
  state = {
    translateY: new Animated.Value(yDelta),
  }

  componentDidUpdate(prevProps) {
    this._animatePanel(prevProps.showPanel);
  }

  _animatePanel = (prevPanel) => {
    if (prevPanel !== this.props.showPanel) {
      let to;
      if (this.props.showPanel) {
        to = 0;
        setTimeout(() => {
          this._searchInput.focus()
        }, 100)
      }
      else {
        to = yDelta;
      }
      Animated.timing(
        this.state.translateY,
        {
          toValue: to,
          easing: Easing.elastic(0.8),
        },
        { useNativeDriver: true },
      ).start();
    }
  }

  _dismissPanel = () => {
    this.props.setShowPanel(false)
    this._searchInput.blur()
  }

  _setSearchRef = (ref) => {
    this._searchInput = ref.getWrappedInstance().input
  }

  render() {
    const {
      showPanel,
    } = this.props;
    const translateY = {
      transform: [{ translateY: this.state.translateY }]
    }
    const dismissPointerEvents = showPanel ? "auto" : "none"
    return (
      <Animated.View style={[styles.container, translateY]} pointerEvents="box-none">
        <View style={styles.dismissButton} pointerEvents={dismissPointerEvents}>
          <TouchableWithoutFeedback onPress={this._dismissPanel}>
            <View style={styles.dismissButton} />
          </TouchableWithoutFeedback>
        </View>
        <BlurView blurType="xlight" blurAmount={10} style={styles.blur}>
          <SearchBar
            ref={this._setSearchRef}
            showPanel={showPanel}
          />
          <SearchResults showPanel={showPanel} />
        </BlurView>
      </Animated.View>
    )
  }
}
