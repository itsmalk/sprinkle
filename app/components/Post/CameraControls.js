import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import SnapButton from '@/components/Post/SnapButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const CameraControls = ({ capture }) => (
  <View style={styles.container}>
    <SnapButton
      capture={capture}
    />
  </View>
)

export default CameraControls
