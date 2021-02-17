import { GET_SINGLE_SHOW, SHOW_ERRORS } from '../actions/types';

const initialstate = {
  show: [],
  error: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case GET_SINGLE_SHOW:
      return {
        ...state,
        show: action.payload,
      };
    case SHOW_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
