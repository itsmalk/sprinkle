import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ListView,
} from 'react-native';
import PhotoCheckbox from '@/components/CameraView/PhotoCheckbox';

const styles = StyleSheet.create({
  container: {
    height: 80,
  }
})

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapStateToProps = state => ({
  cameraRoll: state.camera.cameraRoll
})

@connect(mapStateToProps)
class CameraRoll extends Component {
  constructor(props) {
    super();
    this.state = {
      dataSource: ds.cloneWithRows(props.cameraRoll),
    };
  }

  componentDidUpdate() {
    this.setState({
      dataSource: ds.cloneWithRows(this.props.cameraRoll),
    })
  }

  _renderRow = (image) => {
    return <PhotoCheckbox image={image} />
  }

  render() {
    if (!this.props.cameraRoll.length){
      return null
    }
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        horizontal
      />
    )
  }
}

export default CameraRoll;
