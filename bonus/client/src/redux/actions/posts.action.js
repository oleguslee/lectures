import {
  POSTS_GET_START,
  POSTS_GET_SUCCESS,
  POSTS_GET_ERROR,
  POST_ADD_ERROR,
  POST_ADD_START,
  POST_ADD_SUCCESS,
} from "../types";

// get
export const getPostsStart = () => ({
  type: POSTS_GET_START,
});
export const getPostsSuccess = (list) => ({
  type: POSTS_GET_SUCCESS,
  payload: list,
});
export const getPostsError = (err) => ({
  type: POSTS_GET_ERROR,
  payload: err,
});

export const getPosts = () => async (dispatch) => {
  dispatch(getPostsStart());

  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const result = await response.json();
    dispatch(getPostsSuccess(result));
  } catch (err) {
    dispatch(getPostsError(err));
  }
};

// post
export const addPostStart = () => ({
  type: POST_ADD_START,
});
export const addPostSuccess = (newPost) => ({
  type: POST_ADD_SUCCESS,
  payload: newPost,
});
export const addPostError = (err) => ({
  type: POST_ADD_ERROR,
  payload: err,
});

export const addPost = (newPost) => async (dispatch) => {
  dispatch(addPostStart());

  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const result = await response.json();
    dispatch(addPostSuccess(result));
  } catch (err) {
    dispatch(addPostError(err));
  }
};
