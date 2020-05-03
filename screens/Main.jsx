import React, { useEffect } from 'react';
import { Posts, HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'; //❗
import { loadPostsThunk } from '../redux/thunks/post';
import { connect } from "react-redux";

const Main = ({
  navigation,
  allPosts,
  loadPostsThunk,
}) => {
  const handleOnOpenPost = post => {
    navigation.navigate('Post', { //❗
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked,
    });
  };

  useEffect(()=>{
    loadPostsThunk()
  }, []);

  return <Posts posts={allPosts} onOpen={handleOnOpenPost} />;
};

// Main.navigationOptions = { //❗, but for navigation.toggleDrawer() we us ({ navigation }) => ({
Main.navigationOptions = ({ navigation }) => ({
  headerTitle: `Blog`,
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

const mapStateToProps = state => ({
  allPosts: state.post.posts,
});

export default connect(mapStateToProps, { loadPostsThunk })(Main);
