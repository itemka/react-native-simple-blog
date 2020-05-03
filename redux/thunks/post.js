import * as FileSystem from 'expo-file-system'; //❗
import {
  loadPosts,
  addPost,
  toggleBookmarked,
  removePost,
} from '../actions/post';
import { DB } from '../../database';

export const loadPostsThunk = () => async dispatch => {
  try {
    const posts = await DB.getPosts();

    dispatch(loadPosts(posts));
  } catch (err) {
    console.log('Error into loadPostsThunk: ', err);
  }
};

export const addPostThink = post => async dispatch => {
  try {
    const fileName = post.img.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName; //❗ path to save photo

    try {
      await FileSystem.moveAsync({ //❗changing the path where saving image
        to: newPath,
        from: post.img,
      });
    } catch (err) {
      console.log('Error into FileSystem.moveAsync: ', err);
    }

    const currentPost = { ...post, img: newPath };

    const id = await DB.createPost(currentPost);

    currentPost.id = id;

    dispatch(addPost(currentPost));
  } catch (err) {
    console.log('Error into addPostThink: ', err);
  }
};

export const toggleBookmarkedThunk = post => async dispatch => {
  try {
    await DB.updatePost(post);

    dispatch(toggleBookmarked(post.id));
  } catch (err) {
    console.log('Error into toggleBookmarkedThunk: ', err);
  }
};

export const removePostThunk = id => async dispatch => {
  try {
    await DB.removePost(id);

    dispatch(removePost(id));
  } catch (err) {
    console.log('Error into removePostThunk: ', err);
  }
};
