import React from 'react';
import { Posts, HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

export const Bookmarked = ({ navigation }) => {
  const handleOnOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked,
    });
  };

  const favoritesPosts = useSelector(state => state.post.favoritePosts);

  return <Posts posts={favoritesPosts} onOpen={handleOnOpenPost} />;
};

Bookmarked.navigationOptions = ({ navigation }) => ({
  headerTitle: `Favorites`,
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Toggle Drawer"
      iconName="ios-menu"
      onPress={() => navigation.toggleDrawer()}
    />
  </HeaderButtons>,
});
