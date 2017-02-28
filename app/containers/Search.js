import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from '@/constants';
import GridView from 'react-native-grid-view'
import SearchBar from '@/components/SearchBar'
import PostButton from '@/components/PostButton'

const AnimatedGridView = Animated.createAnimatedComponent(GridView);

const { width } = Dimensions.get('window');
const itemWidth = (width - 45) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  grid: {
    flex: 1,
  },
  content: {
    paddingTop: 207.5,
    paddingHorizontal: 7.5,
    paddingBottom: 7.5,
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

const mapStateToProps = state => ({
  searchFocused: state.ui.searchFocused,
});

@connect(mapStateToProps)
class Search extends Component {
  state = {
    scrollY: new Animated.Value(0),
    opacity: new Animated.Value(1),
  }

  componentDidUpdate(prevProps) {
    this._animateGridOpacity(prevProps.searchFocused);
  }

  _previousScrollY = null
  _animateGridOpacity = (prevFocus) => {
    if (prevFocus !== this.props.searchFocused) {
      let to;
      if (this.props.searchFocused) {
        this._previousScrollY = this.state.scrollY._value;
        to = { opacity: 0, scrollY: 125 };
      }
      else {
        to = { opacity: 1, scrollY: this._previousScrollY };
        this._previousScrollY = null;
      }
      // FIXME run animation before focusing input
      Animated.parallel([
        Animated.timing(
          this.state.opacity,
          {
            toValue: to.opacity,
            duration: 250,
          },
          { useNativeDriver: true },
        ),
        Animated.timing(
          this.state.scrollY,
          {
            toValue: to.scrollY,
            duration: 250,
          },
          { useNativeDriver: true },
        ),
      ]).start();
    }
  }

  _pushFoodView = () => {
    Actions.dish();
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item} key={item} onPress={this._pushFoodView} />
    )
  }

  render() {
    const opacity = {
      opacity: this.state.opacity,
    };
    const onScroll = (this.props.searchFocused)
      ? () => {}
      : Animated.event(
        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
      )
    return (
      <View style={styles.container}>
        <AnimatedGridView
          ref={ref => { this._grid = ref }}
          scrollEventThrottle={16}
          onScroll={onScroll}
          contentContainerStyle={styles.content}
          style={[opacity, styles.grid]}
          items={dataSource}
          itemsPerRow={2}
          renderItem={this._renderItem}
          scrollEnabled={!this.props.searchFocused}
        />
        <SearchBar scrollY={this.state.scrollY} />
        <PostButton />
      </View>
    )
  }
}

export default Search;
