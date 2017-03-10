import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
import { setShowSearchResults } from '@/actions/ui';
import MenuIcon from '@/components/MapView/MenuIcon';

const styles = StyleSheet.create({
  img: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 1.5,
  }
});

const mapStateToProps = state => ({
  show: state.ui.showSearchResults
})

const mapDispatchToProps = {
  setShowSearchResults
}

@connect(mapStateToProps, mapDispatchToProps)
class MenuButton extends Component {
  _showResults = () => {
    this.props.setShowSearchResults(!this.props.show)
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this._showResults}
      >
        <Image
          source={Images.MENU_BTN}
          style={styles.img}
        >
          <MenuIcon show={this.props.show} />
        </Image>
      </TouchableOpacity>
    )
  }
}

export default MenuButton;
