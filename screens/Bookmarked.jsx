import React from 'react';
import { dataPosts } from './utils/data';
import { Posts, HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

export const Bookmarked = ({ navigation }) => {
  const handleOnOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked,
    });
  };

  const favoritesPosts = dataPosts.filter(post => post.bookmarked); 

  return <Posts posts={favoritesPosts} onOpen={handleOnOpenPost} />;
};

Bookmarked.navigationOptions = {
  headerTitle: `Favorites`,
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Toggle Drawer"
      iconName="ios-menu"
      onPress={() => console.log('Press photo')}
    />
  </HeaderButtons>,
};
