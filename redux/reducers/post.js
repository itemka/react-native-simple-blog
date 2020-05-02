import { actionTypes } from '../actions/actionTypes';

export const initialState = {
  posts: [],
  favoritePosts: [],
};

const handlers = {
  [actionTypes.LOAD_POSTS]: (state, { payload }) => ({
    ...state,
    posts: payload,
    favoritePosts: payload.filter(post => post.bookmarked),
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
  DEFAULT: state => state,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
