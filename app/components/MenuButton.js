import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
import { setShowSearchResults } from '@/actions/ui';

const styles = StyleSheet.create({
  button: { },
  img: {
    backgroundColor: 'transparent',
  }
});

const mapStateToProps = state => ({
  showSearchResults: state.ui.showSearchResults
})

const mapDispatchToProps = {
  setShowSearchResults
}

@connect(mapStateToProps, mapDispatchToProps)
class MenuButton extends Component {
  _showResults = () => {
    this.props.setShowSearchResults(!this.props.showSearchResults)
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._showResults}
      >
        <Image
          source={Images.MENU_BTN}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default MenuButton;
