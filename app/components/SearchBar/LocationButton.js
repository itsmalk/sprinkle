import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images } from '@/constants';
// import { locationEnabled, permissionGranted } from '@/selectors/location';
import { enableLocation, locateUser } from '@/actions/location'

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
  permissionGranted: false, // permissionGranted(state),
  enabled: false, // locationEnabled(state),
})

const mapDispatchToProps = {
  enableLocation,
  locateUser,
}

@connect(mapStateToProps, mapDispatchToProps)
class LocationButton extends Component {
  _onPress = () => {
    if (this.props.enabled) {
      this.props.locateUser()
    }
    else {
      this.props.enableLocation()
    }
  }
  render() {
    const source = this.props.enabled
      ? Images.LOCATION.ON
      : Images.LOCATION.OFF
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pushPostView}
      >
        <Image
          source={source}
          style={styles.img}
        />
      </TouchableOpacity>
    )
  }
}

export default LocationButton;
