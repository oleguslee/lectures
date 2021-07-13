import {
  POSTS_GET_START,
  POSTS_GET_SUCCESS,
  POSTS_GET_ERROR,
  POST_ADD_ERROR,
  POST_ADD_START,
  POST_ADD_SUCCESS,
} from "../types";

export default function postReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case POSTS_GET_START: {
      return { ...state, isLoading: true };
    }
    case POSTS_GET_SUCCESS: {
      return { list: payload, isLoading: false, error: null };
    }
    case POSTS_GET_ERROR: {
      return { ...state, isLoading: false, error: payload };
    }

    case POST_ADD_START: {
      return { ...state, isLoading: true };
    }
    case POST_ADD_SUCCESS: {
      return { list: [...state.list, payload], isLoading: false, error: null };
    }
    case POST_ADD_ERROR: {
      return { ...state, isLoading: false, error: payload };
    }
    default: {
      return state;
    }
  }
}
