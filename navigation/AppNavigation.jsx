import { createAppContainer } from 'react-navigation'; //❗️
import { createStackNavigator } from 'react-navigation-stack'; //❗️
import { Main, Post } from '../screens';

const PostNavigator = createStackNavigator({
  Main: Main,
  Post: { screen: Post }, //❗️
}, { initialRouteName: `Main` });

export const AppNavigation = createAppContainer(PostNavigator);
