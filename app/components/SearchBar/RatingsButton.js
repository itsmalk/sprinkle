import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
import { setSortResultsByRating } from '@/actions/ui';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    backgroundColor: 'transparent',
  }
});

const mapStateToProps = state => ({
  sortResultsByRating: state.ui.sortResultsByRating
})

const mapDispatchToProps = {
  setSortResultsByRating
}

@connect(mapStateToProps, mapDispatchToProps)
class RatingsButton extends Component {
  _onPress = () => {
    const {
      sortResultsByRating
    } = this.props;
    this.props.setSortResultsByRating(!sortResultsByRating)
  }
  render() {
    const source = this.props.sortResultsByRating
      ? Images.RATINGS.ON
      : Images.RATINGS.OFF
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._onPress}
      >
        <Image
          source={source}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default RatingsButton;
