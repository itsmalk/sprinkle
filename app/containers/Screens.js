import {Navigation} from 'react-native-navigation';

import Nav from '@/containers/Nav'
import Dishes from '@/containers/Dishes'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('nav', () => Nav, store, Provider);
  Navigation.registerComponent('dishes', () => Dishes, store, Provider);
}
