import React from 'react';
import { createAppContainer } from 'react-navigation'; //❗️
import { createStackNavigator } from 'react-navigation-stack'; //❗️
import {
  Main,
  Post,
  Bookmarked,
} from '../screens';
import { THEME } from '../utils/constants';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

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

const BookmarkedNavigator = createStackNavigator({
  Bookmarked: Bookmarked,
  Post: Post,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE,
    },
    headerTintColor: Platform.OS === 'android' ? THEME.WHITE : THEME.MAIN_COLOR,
  }
});

export const BottomNavigator = createBottomTabNavigator({
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons
        name="ios-albums"
        size={25}
        color={info.tintColor}
      />,
    },
  },
  Bookmarked: {
    screen: BookmarkedNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons
        name="ios-star"
        size={25}
        color={info.tintColor}
      />,
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: THEME.MAIN_COLOR,
  }
});

export const AppNavigation = createAppContainer(BottomNavigator);
