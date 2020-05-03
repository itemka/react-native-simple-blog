import { actionTypes } from './actionTypes';

export const loadPosts = posts => ({
  type: actionTypes.LOAD_POSTS,
  payload: posts,
});

export const toggleBookmarked = id => ({
  type: actionTypes.TOGGLE_BOOKMARKED,
  payload: id,
});

export const removePost = id => ({
  type: actionTypes.REMOVE_POST,
  payload: id,
});

export const addPost = post => ({
  type: actionTypes.ADD_POST,
  payload: post,
});
