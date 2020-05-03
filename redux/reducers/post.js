import { actionTypes } from '../actions/actionTypes';

export const initialState = {
  posts: [],
  favoritePosts: [],
  loading: true,
};

const handlers = {
  [actionTypes.LOAD_POSTS]: (state, { payload }) => ({
    ...state,
    posts: payload,
    favoritePosts: payload.filter(post => post.bookmarked),
    loading: false,
  }),
  [actionTypes.TOGGLE_BOOKMARKED]: (state, { payload }) => {
    const allPosts = state.posts.map(post => {
      if (post.id === payload) {
        post.bookmarked = !post.bookmarked;
      }
      return post;
    });

    return {
      ...state,
      post: allPosts,
      favoritePosts: allPosts.filter(post => post.bookmarked),
    };
  },
  [actionTypes.REMOVE_POST]: (state, { payload }) => ({
    ...state,
    posts: state.posts.filter(post => post.id !== payload),
    favoritePosts: state.favoritePosts.filter(post => post.id !== payload),
  }),
  [actionTypes.ADD_POST]: (state, { payload }) => ({
    ...state,
    posts: [ { ...payload }, ...state.posts ],
  }),
  DEFAULT: state => state,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
