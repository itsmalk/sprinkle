import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { Colors } from '@/constants';
import ResultsFavoritesButton from '@/components/ResultsGrid/ResultsFavoritesButton';
import ResultsLocationButton from '@/components/ResultsGrid/ResultsLocationButton';
import ResultsRatingsButton from '@/components/ResultsGrid/ResultsRatingsButton';
import ResultsPrice from '@/components/ResultsGrid/ResultsPrice';

const { width } = Dimensions.get('window');
const itemWidth = (width - 45) / 2;

const styles = StyleSheet.create({
  item: {
    width: itemWidth,
    margin: 7.5,
    borderRadius: 10,
    aspectRatio: 1,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    width: itemWidth,
    margin: 7.5,
    borderRadius: 10,
    aspectRatio: 1,
    borderWidth: 0.5,
  },
});

class RenderedItem extends Component {
  _pushDishView = () => {
    Actions.dish({text: 'Dish'})
  }
  render() {
    return (
      <View style={styles.item} >
        <TouchableOpacity onPress={this._pushDishView}>
          <Image source={{uri: 'https://unsplash.it/200?random'}}
            style={styles.image} >
              <ResultsFavoritesButton />
              <ResultsLocationButton />
              <ResultsRatingsButton />
              <ResultsPrice />
          </Image>
        </TouchableOpacity>
      </View>
    )
  }
}

export default RenderedItem;
