import React, { useEffect } from 'react';
import {
  Posts,
  HeaderIcon,
  Loader,
} from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'; //❗
import { loadPostsThunk } from '../redux/thunks/post';
import { useDispatch, useSelector } from 'react-redux';

export const Main = ({ navigation }) => {
  const handleOnOpenPost = post => {
    navigation.navigate('Post', { //❗
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked,
    });
  };

  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.post.posts);
  const loading = useSelector(state => state.post.loading);

  useEffect(()=>{
    dispatch(loadPostsThunk());
  }, []);

  return (
    <Loader isLoader={loading}>
      <Posts posts={allPosts} onOpen={handleOnOpenPost} />
    </Loader>
  );
};

// Main.navigationOptions = { //❗, but for navigation.toggleDrawer() we us ({ navigation }) => ({
Main.navigationOptions = ({ navigation }) => ({
  headerTitle: `My blog!`,
  //headerRight: <Text>sedfr</Text> //❗, but us lib: react-navigation-header-buttons
  headerRight: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-camera"
      onPress={() => navigation.push('Create')} //❗
    />
  </HeaderButtons>,
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Toggle Drawer"
      iconName="ios-menu"
      onPress={() => navigation.toggleDrawer()} //❗
    />
  </HeaderButtons>,
});
