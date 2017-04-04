import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { setHiding } from '@/actions/autocomplete';
import { setSelectedPhoto } from '@/actions/post';
import { selectedPhoto } from '@/selectors/viewFinder';

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 55,
    backgroundColor: '#000',
    borderRadius: 5,
    flexDirection: 'row',
  },
  preview: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 5,
  }
});

const mapStateToProps = state => ({
  photo: selectedPhoto(state),
});

const mapDispatchToProps = {
  setHiding,
  setSelectedPhoto,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class BackButton extends Component {
  _hide = () => {
    this.props.setHiding(true);
  };
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._hide}>
        <Image style={styles.preview} source={this.props.photo}/>
     </TouchableOpacity>
   );
  }
}
