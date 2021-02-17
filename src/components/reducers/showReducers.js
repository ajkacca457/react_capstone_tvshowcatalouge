import { GET_SHOWS, SHOW_ERRORS } from '../actions/types';

const initialstate = {
  shows: [],
  error: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        shows: action.payload,
      };
    case SHOW_ERRORS:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
