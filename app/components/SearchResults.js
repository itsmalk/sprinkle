import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  ListView,
} from 'react-native';
import { Colors } from '@/constants';
import { BlurView } from 'react-native-blur';

const { width, height } = Dimensions.get('window');
const itemWidth = (width - 45) / 2;

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
    padding: 7.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: itemWidth,
    margin: 7.5,
    backgroundColor: Colors.BLACK,
    borderRadius: 4,
    aspectRatio: 1,
  },
});

const dataSource = [1,2,3,4,5,6,7,8,9,10,11,12,13];

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
      <View style={styles.item} key={item} />
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
              ref={ref => { this._ref = ref }}
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
