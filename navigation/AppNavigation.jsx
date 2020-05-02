import React from 'react';
import { createAppContainer } from 'react-navigation'; //❗️
import { createStackNavigator } from 'react-navigation-stack'; //❗️
import {
  Main,
  Post,
  Bookmarked,
  About,
  Create,
} from '../screens';
import { THEME } from '../utils/constants';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; //❗️
import { createDrawerNavigator } from 'react-navigation-drawer'; //❗️


const navigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE,
  },
  headerTintColor: Platform.OS === 'android' ? THEME.WHITE : THEME.MAIN_COLOR,
}

// first level 
const PostNavigator = createStackNavigator(
  {
    Main: Main,
    Post: { screen: Post }, //❗️
  }, 
  {
    defaultNavigationOptions: navigatorOptions, //❗️
  }
);

// first level 
const BookmarkedNavigator = createStackNavigator(
  {
    Bookmarked: Bookmarked,
    Post: Post,
  },
  {
    defaultNavigationOptions: navigatorOptions,
  }
);

// first level 
const AboutNavigator = createStackNavigator(
  {
    About: About,
  },
  {
    defaultNavigationOptions: navigatorOptions,
  },
);

// first level 
const CreateNavigator = createStackNavigator(
  {
    Create: Create,
  },
  {
    defaultNavigationOptions: navigatorOptions,
  },
);


const BottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: `All`,
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
      tabBarLabel: `Favorites`,
      tabBarIcon: info => <Ionicons
        name="ios-star"
        size={25}
        color={info.tintColor}
      />,
    }
  },
};

// second level
export const BottomNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(BottomTabsConfig, {
      activeTintColor: THEME.WHITE,
      shifting: true,
      barStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
    })
  : createBottomTabNavigator(BottomTabsConfig, {
      tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR,
      }
    }
);


// third level
const MainNavigation = createDrawerNavigator(
  { //❗️
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Main',
        // drawerIcon: ...
      },
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'Create post',
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: 'openSansBold',
      }
    },
  },
);

export const AppNavigation = createAppContainer(MainNavigation);
