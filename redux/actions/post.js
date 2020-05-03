import { actionTypes } from './actionTypes';
import { dataPosts } from '../../screens/utils/data';

export const loadPosts = () => ({
  type: actionTypes.LOAD_POSTS,
  payload: dataPosts,
});

export const toggleBookmarked = id => ({
  type: actionTypes.TOGGLE_BOOKMARKED,
  payload: id,
});

export const removePost = id => ({
  type: actionTypes.REMOVE_POST,
  payload: id,
});
