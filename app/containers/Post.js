import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>sprinkle</Text>
      </View>
    )
  }
}

export default Post;
