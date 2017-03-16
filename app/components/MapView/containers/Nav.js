import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';

import MapView from '@/containers/MapView';
import Post from '@/containers/Post';
import Dish from '@/containers/Dish';
import CameraView from '@/containers/CameraView';

const ReduxRouter = connect()(Router);

const mapStateToProps = state => ({
  rehydrated: state.ui.rehydrated
});

const transparentScene = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: 'transparent',
  };
  return style;
};

@connect(mapStateToProps)
class Nav extends Component {
  render() {
    if (this.props.rehydrated) {
      return (
        <ReduxRouter>
          <Scene key="modal" component={Modal}>
            <Scene key="root" hideNavBar>
              <Scene key="map" component={MapView} initial direction="vertical" />
              <Scene key="post" component={CameraView} direction="vertical" schema="modal" getSceneStyle={transparentScene} />
              <Scene key="dish" component={Dish} direction="vertical" />
            </Scene>
          </Scene>
        </ReduxRouter>
      );
    }
    return null
  }
}

export default Nav;
