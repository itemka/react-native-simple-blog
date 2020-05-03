import { actionTypes } from './actionTypes';

export const loadPosts = () => ({
  type: actionTypes.LOAD_POSTS,
  payload: [],
});

export const toggleBookmarked = id => ({
  type: actionTypes.TOGGLE_BOOKMARKED,
  payload: id,
});

export const removePost = id => ({
  type: actionTypes.REMOVE_POST,
  payload: id,
});

export const addPost = post => {
  post.id = Date.now().toString();

  return {
    type: actionTypes.ADD_POST,
    payload: post,
  }
};
