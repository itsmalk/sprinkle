import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from '@/constants';
import GridView from 'react-native-grid-view'
import {
  setShowPanel,
} from '@/actions/ui';

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
  showPanel: {
    ...StyleSheet.absoluteFillObject
  },
  showPanelBtn: {
    flex: 1,
  },
});

const dataSource = [1,2,3,4,5,6,7,8,9,10,11,12];

const mapDispatchToProps = {
  setShowPanel,
}

@connect(null, mapDispatchToProps)
class Search extends Component {
  _pushFoodView = () => {
    Actions.dish();
  }

  _showPanel = () => {
    this.props.setShowPanel(true)
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item} key={item} onPress={this._pushFoodView} />
    )
  }

  render() {
    const {
      showPanel,
    } = this.props;
    const pointerEvents = showPanel ? "none" : "auto"
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
        <View style={styles.showPanel} pointerEvents={pointerEvents}>
          <TouchableWithoutFeedback onPress={this._showPanel}>
            <View style={styles.showPanelBtn} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

export default Search;
