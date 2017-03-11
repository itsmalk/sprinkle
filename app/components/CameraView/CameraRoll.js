import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ListView,
} from 'react-native';
import PhotoCheckbox from '@/components/CameraView/PhotoCheckbox';
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    paddingVertical: 1,
    backgroundColor: Colors.BLACK,
  },
  list: {
    flex: 1,
  },
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.cameraRoll),
    })
  }

  _renderRow = (image) => {
    return <PhotoCheckbox image={image} />
  }

  render() {
    if (!this.props.cameraRoll.length){
      return <View style={styles.container} />
    }
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          horizontal
        />
      </View>
    )
  }
}

export default CameraRoll;
