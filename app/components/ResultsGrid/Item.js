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
import FavoritesButton from '@/components/ResultsGrid/FavoritesButton';
import LocationButton from '@/components/ResultsGrid/LocationButton';
import RatingsButton from '@/components/ResultsGrid/RatingsButton';
import Price from '@/components/ResultsGrid/Price';

const { width } = Dimensions.get('window');
const itemWidth = (width - 45) / 2;

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    margin: 7.5,
    aspectRatio: 1,
    backgroundColor: '#000',
    shadowColor: Colors.BLACK,
    borderRadius: 4,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  content: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  imgBorder: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: Colors.BLACK,
  },
  btn: {
    flex: 1,
  },
  img: {
    flex: 1,
    backgroundColor: '#000',
    resizeMode: 'cover',
  },
});

class RenderedItem extends Component {
  _pushDishView = () => {
    Actions.dish({text: 'Dish'})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imgBorder}>
            <TouchableOpacity
              style={styles.btn}
              onPress={this._pushDishView}
            >
              <Image
                source={{uri: 'https://unsplash.it/200?random'}}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <FavoritesButton />
          <LocationButton />
          <RatingsButton />
          <Price />
        </View>
      </View>
    )
  }
}

export default RenderedItem;
