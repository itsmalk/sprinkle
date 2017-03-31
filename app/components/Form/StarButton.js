import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
import { setStars } from '@/actions/post';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
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
    const img = this.props.index + 1 <= this.props.stars ?
    Images.POST_STAR : Images.DARK_POST_STAR;
    return (
      <TouchableOpacity onPress={this._setStars}>
        <Image
          style={{margin: 4}}
          source={img}
        />
      </TouchableOpacity>
    )

  }
}

export default SnapButton;
