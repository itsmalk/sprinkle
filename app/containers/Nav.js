import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';

import MapView from '@/containers/MapView';
import Post from '@/containers/Post';
import Dish from '@/containers/Dish';

const ReduxRouter = connect()(Router);

const mapStateToProps = state => ({
  rehydrated: state.ui.rehydrated
});

@connect(mapStateToProps)
class Nav extends Component { 
  render() {
    if (this.props.rehydrated) {
      return (
        <ReduxRouter>
          <Scene key="modal" component={Modal}>
            <Scene key="root" hideNavBar>
              <Scene key="map" component={MapView} initial direction="vertical" />
              <Scene key="post" component={Post} direction="vertical" schema="modal" panHandlers={null} />
              <Scene key="dish" component={Dish} />
            </Scene>
          </Scene>
        </ReduxRouter>
      );
    }
    return null
  }
}

export default Nav;
