import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import { Colors } from '@/constants';
import GridView from 'react-native-grid-view'

const { width, height } = Dimensions.get('window');
const itemWidth = (width - 45) / 2;

const yDelta = height - 105

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 105,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  grid: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    padding: 7.5,
    overflow: 'hidden',
  },
  item: {
    width: itemWidth,
    margin: 7.5,
    backgroundColor: Colors.BLACK,
    borderRadius: 4,
    aspectRatio: 1,
  },
});

const dataSource = [1,2,3,4,5,6,7,8,9,10,11,12];

const mapStateToProps = state => ({
  showSearchResults: state.ui.showSearchResults
})

@connect(mapStateToProps)
class Search extends Component {
  state = {
    translateY: new Animated.Value(yDelta)
  }
  componentDidUpdate(prevProps) {
    this._animateResults(prevProps.showSearchResults)
  }

  _animateResults = (prevProp) => {
    const showSearchResults = this.props.showSearchResults;
    if (prevProp !== showSearchResults) {
      const to = showSearchResults
        ? 0
        : yDelta
      Animated.timing(
        this.state.translateY,
        { toValue: to }
      ).start();
    }
  }

  _renderItem = (item) => {
    return (
      <View style={styles.item} key={item} />
    )
  }

  render() {
    const translate = {
      transform: [{ translateY: this.state.translateY }]
    }
    return (
      <Animated.View style={[styles.container, translate]}>
        <GridView
          ref={ref => { this._grid = ref }}
          contentContainerStyle={styles.content}
          style={styles.grid}
          items={dataSource}
          itemsPerRow={2}
          renderItem={this._renderItem}
          scrollEnabled={this.props.showPanel}
          keyboardShouldPersistTaps="never"
          keyboardDismissMode="on-drag"
          removeClippedSubviews
        />
      </Animated.View>
    )
  }
}

export default Search;
