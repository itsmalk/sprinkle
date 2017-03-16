import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  ListView,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import RenderedItem from '@/components/MapView/RenderedItem';

const { height } = Dimensions.get('window');
const yDelta = height - 105

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: yDelta,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    backfaceVisibility: 'visible',
  },
  bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: yDelta,
    height: yDelta,
  },
  grid: {
    flex: 1,
  },
  content: {
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
});

const dataSource = [];
let i = 0;
while (i < 1000) {
  dataSource.push(i)
  i++
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapStateToProps = state => ({
  showSearchResults: state.ui.showSearchResults
})

@connect(mapStateToProps)
class Search extends Component {
  state = {
    translateY: new Animated.Value(yDelta),
    dataSource: ds.cloneWithRows(dataSource),
  }

  componentDidUpdate(prevProps) {
    this._animateResults(prevProps.showSearchResults)
  }

  _animateResults = (prevProp) => {
    const showSearchResults = this.props.showSearchResults;
    if (prevProp !== showSearchResults) {
      const to = showSearchResults
        ? -yDelta
        : 0
      Animated.timing(
        this.state.translateY,
        { toValue: to },
        { useNativeDriver: true }
      ).start();
    }
  }

  _renderItem = (item) => {
    return (
      <RenderedItem />
    )
  }

  render() {
    const translate = {
      transform: [{ translateY: this.state.translateY }]
    }
    const pointerEvents = this.props.showSearchResults ? 'auto' : 'none';
    return (
      <View style={styles.container} pointerEvents={pointerEvents}>
        <Animated.View style={[styles.bg, translate]}>
          <BlurView blurType="light" blurAmount={10} style={styles.grid}>
            <ListView
              contentContainerStyle={styles.content}
              style={styles.grid}
              dataSource={this.state.dataSource}
              renderRow={this._renderItem}
              scrollEnabled={this.props.showSearchResults}
              pageSize={10}
              initialListSize={1}
              removeClippedSubviews={false}
            />
          </BlurView>
        </Animated.View>
      </View>
    )
  }
}

export default Search;
