import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from '@/constants';
import GridView from 'react-native-grid-view'

const { width } = Dimensions.get('window');
const itemWidth = (width - 45) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  grid: {
    flex: 1,
  },
  content: {
    padding: 7.5,
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
  searchFocused: state.ui.searchFocused,
});

@connect(mapStateToProps)
class Search extends Component {
  _pushFoodView = () => {
    Actions.dish();
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item} key={item} onPress={this._pushFoodView} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
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
        />
      </View>
    )
  }
}

export default Search;
