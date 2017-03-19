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
    height: PhotoCheckbox.height + 10,
    backgroundColor: 'transparent',
  },
  list: {
    flex: 1,
  },
  content: {
    padding: 2.5,
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
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
          horizontal
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

export default CameraRoll;
