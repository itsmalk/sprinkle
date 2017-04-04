import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Animated, Dimensions, Keyboard } from 'react-native';
import Swiper from 'react-native-swiper';
import { setVisible, setHiding, setSwiperIndex } from '@/actions/autocomplete';
import BackButton from '@/components/AutoComplete/BackButton';
import Search from '@/components/AutoComplete/Search';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
  },
  content: {
    height: height,
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  titleBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 65,
    flexDirection: 'row-reverse',
    paddingHorizontal: 15,
  },
  suggestion: {
    flex: 1,
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: 3,
    top: 9,
  },
  active: {
    backgroundColor: '#000',
  },
});

const mapStateToProps = state => ({
  visible: state.ui.autocomplete.visible,
  hiding: state.ui.autocomplete.hiding,
  swiperIndex: state.ui.autocomplete.swiperIndex,
});

const mapDispatchToProps = {
  setVisible,
  setHiding,
  setSwiperIndex,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Autocomplete extends Component {
  _opacity = new Animated.Value(0);
  _translateY = new Animated.Value(0);

  state = {
    swiperHeight: height,
  };

  componentDidUpdate(previous) {
    this._animate(previous);
  }

  _setSwiperHeight = e => {
    const newHeight = height - e.endCoordinates.height;
    this.setState({
      swiperHeight: newHeight,
    });
  };

  _animate = previous => {
    if (!previous.visible && this.props.visible) {
      this._fadeIn();
    } else if (this.props.hiding && !previous.hiding) {
      this._fadeOut();
    }
  };

  _fadeIn = () => {
    Keyboard.addListener('keyboardWillShow', this._setSwiperHeight);
    Animated.parallel([
      Animated.timing(
        this._opacity,
        {
          toValue: 1,
          duration: 200,
        },
        { useNativeDriver: true },
      ),
      Animated.timing(
        this._translateY,
        {
          toValue: -30,
          duration: 200,
        },
        { useNativeDriver: true },
      ),
    ]).start();
  };

  _fadeOut = () => {
    Keyboard.removeListener('keyboardWillShow', this._setSwiperHeight);
    Animated.parallel([
      Animated.timing(
        this._opacity,
        {
          toValue: 0,
          duration: 150,
        },
        { useNativeDriver: true },
      ),
      Animated.timing(
        this._translateY,
        {
          toValue: 0,
          duration: 150,
        },
        { useNativeDriver: true },
      ),
    ]).start(this._hide);
  };

  _hide = () => {
    this.props.setVisible(false);
    this.props.setHiding(false);
  };

  _onMomentumScrollEnd = (e, state) => {
    // this._inputs[state.index].focus();
    this.props.setSwiperIndex(state.index);
  };

  _renderSwiper = () => {
    if (!this.props.visible) return null;
    return (
      <Swiper
        showsPagination
        height={this.state.swiperHeight}
        index={this.props.swiperIndex}
        onMomentumScrollEnd={this._onMomentumScrollEnd}
        dot={<View style={styles.dot} />}
        activeDot={<View style={[styles.dot, styles.active]} />}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="always"
        renderMinimal
      >
        <Search index={0} header="Dish" placeholder="What's the dish called?" />
        <Search
          index={1}
          header="Restaurant"
          placeholder="What's the place called?"
        />
        <View style={styles.suggestion} />
      </Swiper>
    );
  };

  render() {
    const pointerEvents = this.props.visible ? 'box-none' : 'none';
    const bgStyle = { opacity: this._opacity };
    const contentStyle = {
      transform: [{ translateY: this._translateY }],
    };
    return (
      <Animated.View
        style={[styles.container, bgStyle]}
        pointerEvents={pointerEvents}
      >
        <Animated.View
          pointerEvents="box-none"
          style={[styles.content, contentStyle]}
        >
          {this._renderSwiper()}
          <View style={styles.titleBar} pointerEvents="box-none">
            <BackButton />
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}
