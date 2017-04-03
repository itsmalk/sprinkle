import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Images } from '@/constants';
import { setStars } from '@/actions/post';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  img: {
    marginHorizontal: 4,
  },
  fade: {
    tintColor: '#D1D1D1',
  },
});

const mapStateToProps = state => ({
  stars: state.ui.post.stars,
});

const mapDispatchToProps = {
  setStars,
};

@connect(mapStateToProps, mapDispatchToProps)
class SnapButton extends Component {
  _setStars = () => {
    this.props.setStars(this.props.index + 1);
  };
  render() {
    const imgStyle = this.props.index + 1 <= this.props.stars
      ? styles.img
      : [styles.img, styles.fade];
    return (
      <TouchableOpacity onPress={this._setStars}>
        <Image style={imgStyle} source={Images.POST_STAR} />
      </TouchableOpacity>
    );
  }
}

export default SnapButton;
