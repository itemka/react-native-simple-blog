import React from 'react';
import { dataPosts } from './utils/data';
import { Posts, HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'; //❗

export const Main = ({ navigation }) => {
  const handleOnOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked,
    }); //❗
  };

  return <Posts posts={dataPosts} onOpen={handleOnOpenPost} />;
};

Main.navigationOptions = {
  headerTitle: `Blog`,
  //headerRight: <Text>sedfr</Text> //❗, but us lib: react-navigation-header-buttons
  headerRight: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-camera"
      onPress={() => console.log('Press photo')}
    />
  </HeaderButtons>,
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Toggle Drawer"
      iconName="ios-menu"
      onPress={() => console.log('Press photo')}
    />
  </HeaderButtons>,
};
