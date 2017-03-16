import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images, PRICE_RANGE } from '@/constants';
import { setPriceRange } from '@/actions/ui';

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
  priceRange: state.ui.priceRange,
})

const mapDispatchToProps = {
  setPriceRange,
}

@connect(mapStateToProps, mapDispatchToProps)
class CostButton extends Component {
  _onPress = () => {
    let range
    switch(this.props.priceRange) {
      case PRICE_RANGE.OFF:
        range = PRICE_RANGE.LOW
        break
      case PRICE_RANGE.LOW:
        range = PRICE_RANGE.MEDIUM
        break
      case PRICE_RANGE.MEDIUM:
        range = PRICE_RANGE.HIGH
        break
      case PRICE_RANGE.HIGH:
        range = PRICE_RANGE.OFF
        break
      default:
        break
    }
    this.props.setPriceRange(range)
  }
  render() {
    const {
      priceRange
    } = this.props
    let source
    switch(priceRange) {
      case PRICE_RANGE.OFF:
        source = Images.COST.OFF
        break
      case PRICE_RANGE.LOW:
        source = Images.COST.LOW
        break
      case PRICE_RANGE.MEDIUM:
        source = Images.COST.MED
        break
      case PRICE_RANGE.HIGH:
        source = Images.COST.HIGH
        break
      default:
        break
    }
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

export default CostButton;
