import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Colors } from '@/constants';
import FoodMap from '@/components/MapView/FoodMap'
import Panel from '@/components/MapView/Panel'
import PostButton from '@/components/MapView/PostButton'
import PrevPageButton from '@/components/MapView/PrevPageButton'
import NextPageButton from '@/components/MapView/NextPageButton'
import LikesButton from '@/components/MapView/LikesButton'
import MenuButton from '@/components/MapView/MenuButton'
import SearchResults from '@/components/MapView/SearchResults'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  actions: {
    position: 'absolute',
    bottom: 6,
    left: 9,
    flexDirection: 'row',
  }
});

export default class MapView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FoodMap />
        <SearchResults />
        <Panel />
        <PostButton />
        <View
          style={styles.actions}
          pointerEvent="box-none"
        >
          <PrevPageButton />
          <NextPageButton />
          <LikesButton />
          <MenuButton />
        </View>
      </View>
    )
  }
}
