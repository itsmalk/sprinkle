import { Dimensions, NavigationExperimental } from 'react-native';
import { Actions } from 'react-native-router-flux';

const screenSize = Dimensions.get('window');

const {
  Card: {
    CardStackPanResponder: NavigationCardStackPanResponder
  }
} = NavigationExperimental;

const {
  Directions: {
    HORIZONTAL
  }
} = NavigationCardStackPanResponder;

const getPanHandlers = (props) => {
  let { scene } = props;

  let direction = (scene.navigationState != null && scene.navigationState.direction != null)
    ? scene.navigationState.direction
    : HORIZONTAL;

  // By default, onNavigateBack() should be pop()
  // but we'll try to obtain current scene's custom onBack method
  let onNavigateBack = (scene.navigationState != null && scene.navigationState.onBack != null)
    ? scene.navigationState.onBack
    : Actions.pop;

  // Enlarge gesture response distance
  let gestureResponseDistance = direction === HORIZONTAL
    ? 80
    : screenSize.width + 20;

  let customProps = Object.assign({}, props, { gestureResponseDistance, onNavigateBack });
  return direction === HORIZONTAL
    ? NavigationCardStackPanResponder.forHorizontal(customProps)
    : NavigationCardStackPanResponder.forVertical(customProps);
};

export default getPanHandlers;
