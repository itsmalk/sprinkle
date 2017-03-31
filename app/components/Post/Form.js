import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Dish from '@/components/Form/Dish';
import Restaurant from '@/components/Form/Restaurant';
import Price from '@/components/Form/Price';
import Like from '@/components/Form/Like';
import Rate from '@/components/Form/Rate';
import Submit from '@/components/Form/Submit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
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
)

export default Form;
