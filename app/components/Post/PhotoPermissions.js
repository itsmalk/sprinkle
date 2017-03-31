import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import { Colors } from '@/constants';
import Permissions from 'react-native-permissions';
import { setPermission } from '@/actions/cameraRoll';
import { photoAccessGranted } from '@/selectors/cameraRoll';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: width + 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    borderRadius: 4,
    backgroundColor: Colors.BTN_BLUE,
    paddingHorizontal: 16,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

const mapStateToProps = state => ({
  accessGranted: photoAccessGranted(state),
});

const mapDispatchToProps = {
  setPermission,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PhotoPermissions extends Component {
  _enable = async () => {
    try {
      const status = await Permissions.getPermissionStatus('photo');
      switch (status) {
        case 'undetermined': {
          const status = await Permissions.requestPermission('photo');
          this.props.setPermission(status);
          break;
        }
        case 'denied':
          if (Permissions.canOpenSettings()) {
            Permissions.openSettings();
          }
          break;
        case 'authorized':
          this.props.setPermission(status);
          break;
        default:
          return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    if (this.props.accessGranted) return null;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this._enable}>
          <Text style={styles.text}>Enable Photo Access</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
