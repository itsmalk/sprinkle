import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Colors } from '@/constants';
import FoodMap from '@/components/FoodMap'
import Panel from '@/components/Panel'
import PostButton from '@/components/PostButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default class MapView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FoodMap />
        <Panel />
        <PostButton />
      </View>
    )
  }
}
