import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 40,
    paddingRight: 8,
    alignItems: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    backgroundColor: 'transparent',
  }
});

class PostButton extends Component {
  render() {
    return (
      <View style={styles.container} pointerEvents="box-none">
        <TouchableOpacity
          style={styles.button}
          onPress={this._pushPostView}
        >
          <Image
            source={Images.CAM_BTN}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default PostButton;
