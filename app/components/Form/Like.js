import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { Images } from '@/constants';
import { setLiked } from '@/actions/post';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    marginBottom: height/22,
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: 3,
    height: height/12,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    padding: 5,
  },
  img: {
    margin: 1,
   }
});

const mapStateToProps = state => ({
  liked: state.ui.post.liked,
});

const mapDispatchToProps = {
  setLiked,
};

@connect(mapStateToProps, mapDispatchToProps)
class Like extends Component {
  _toggleLiked = () => {
    this.props.setLiked(!this.props.liked);
  }
  render() {
    const img = this.props.liked ? Images.POST_LIKED : Images.POST_NOTLIKED;
    return (
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.btn}
          onPress={this._toggleLiked}
          >
          <Image
            style={styles.img}
            source={img}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Like;
