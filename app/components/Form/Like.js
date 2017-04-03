import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Images } from '@/constants';
import { setLiked } from '@/actions/post';

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: 5,
    height: 52,
    aspectRatio: 1,
  },
  btn: {
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginTop: 1,
  },
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
  };
  render() {
    const img = this.props.liked ? Images.POST_LIKED : Images.POST_NOTLIKED;
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn} onPress={this._toggleLiked}>
          <Image style={styles.img} source={img} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Like;
