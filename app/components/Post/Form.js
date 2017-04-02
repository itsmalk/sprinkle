import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Dish from '@/components/Form/Dish';
import Restaurant from '@/components/Form/Restaurant';
import Price from '@/components/Form/Price';
import Like from '@/components/Form/Like';
import Rate from '@/components/Form/Rate';
import Submit from '@/components/Form/Submit';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: width + 1 + 15,
    paddingBottom: 35,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

const Form = () => (
  <View style={styles.container}>
    <Dish />
    <View style={styles.row}>
      <Restaurant />
      <Price />
    </View>
    <View style={styles.row}>
      <Like />
      <Rate />
      <Submit />
    </View>
  </View>
);

export default Form;
