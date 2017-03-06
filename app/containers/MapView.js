import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Colors } from '@/constants';
import FoodMap from '@/components/FoodMap'
import Panel from '@/components/Panel'
import PostButton from '@/components/PostButton'
import PrevPageButton from '@/components/PrevPageButton'
import NextPageButton from '@/components/NextPageButton'
import LikesButton from '@/components/LikesButton'
import MenuButton from '@/components/MenuButton'

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
