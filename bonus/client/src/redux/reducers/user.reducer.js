export default function postReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
}
