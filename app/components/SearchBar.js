import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  setSearchFocused,
  setShowPanel,
} from '@/actions/ui';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
  },
  bg: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#C9C9C940',
    overflow: 'hidden',
  },
  inputWrap: {
    flex: 1,
    height: 40,
  },
  input: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 12,
    fontSize: 16,
    height: 40,
  },
  showPanel: {
    ...StyleSheet.absoluteFillObject
  },
  showPanelBtn: {
    flex: 1,
  },
  actions: {
    width: 90,
  }
});

const mapDispatchToProps = {
  setShowPanel,
  onBlur: setSearchFocused.bind(null, false),
  onFocus: setSearchFocused.bind(null, true),
}

@connect(null, mapDispatchToProps, null, { withRef: true })
class SearchBar extends Component {
  _setInputRef = (ref) => {
    this.input = ref
  }

  _showPanel = () => {
    this.props.setShowPanel(true)
  }

  _hidePanel = () => {
    this.props.setShowPanel(false)
  }

  render() {
    const {
      showPanel,
    } = this.props;
    const pointerEvents = showPanel ? "none" : "auto"
    return (
      <View style={styles.container}>
        <View style={styles.bg}>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="What are you craving?"
              placeholderTextColor="#5E5E5E"
              ref={this._setInputRef}
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
              returnKeyType="done"
              onSubmitEditing={this._hidePanel}
            />
            <View style={styles.showPanel} pointerEvents={pointerEvents}>
              <TouchableWithoutFeedback onPress={this._showPanel}>
                <View style={styles.showPanelBtn} />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.actions} />
        </View>
      </View>
    )
  }
}

export default SearchBar;
