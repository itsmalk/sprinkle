import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Search from '@/containers/Search';
import Post from '@/containers/Post';
import Results from '@/containers/Results';

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
              <Scene key="search" component={Search} initial direction="vertical"/>
              <Scene key="post" component={Post} direction="vertical" schema="modal" panHandlers={null} />
            </Scene>
            <Scene key="results" component={Results} />
          </Scene>
        </ReduxRouter>
      );
    }
    return null
  }
}

export default Nav;
