import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Images } from '@/constants';
import { renderCamera } from '@/selectors/viewFinder';
import { setGrid } from '@/actions/camera';

const { height, width } = Dimensions.get('window');
const bottomMargin = height - width - 20 + 10;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: bottomMargin,
    left: 10,
  },
  img: {
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = state => ({
  renderCamera: renderCamera(state),
  grid: state.ui.camera.grid,
});

const mapDispatchToProps = {
  setGrid,
};

@connect(mapStateToProps, mapDispatchToProps)
class GridButton extends Component {
  _toggleGrid = () => {
    this.props.setGrid(!this.props.grid);
  };
  render() {
    if (!this.props.renderCamera) return null;
    const img = this.props.grid ? Images.GRID.ON : Images.GRID.OFF;
    return (
      <TouchableOpacity style={styles.button} onPress={this._toggleGrid}>
        <Image source={img} style={styles.img} />
      </TouchableOpacity>
    );
  }
}

export default GridButton;
