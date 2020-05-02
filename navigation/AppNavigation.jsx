import { createAppContainer } from 'react-navigation'; //❗️
import { createStackNavigator } from 'react-navigation-stack'; //❗️
import { Main, Post } from '../screens';
import { THEME } from '../utils/constants';
import { Platform } from 'react-native';

const PostNavigator = createStackNavigator({
  Main: Main,
  Post: { screen: Post }, //❗️
}, {
  initialRouteName: `Main`, //❗️
  defaultNavigationOptions: { //❗️
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE,
    },
    headerTintColor: Platform.OS === 'android' ? THEME.WHITE : THEME.MAIN_COLOR,
  }
});

export const AppNavigation = createAppContainer(PostNavigator);
