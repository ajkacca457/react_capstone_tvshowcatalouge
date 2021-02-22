import {
  FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE, FETCH_SHOW_SUCCESS,
} from '../actions/type';

export const initialstate = {
  loading: false,
  shows: [],
  show: {},
  error: '',
};

const showsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_SHOWS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SHOWS_SUCCESS:
      return {
        loading: false,
        shows: action.payload,
        show: {},
        error: '',
      };

    case FETCH_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        shows: [],
        show: action.payload,
      };

    case FETCH_SHOWS_FAILURE:
      return {
        loading: false,
        shows: [],
        show: {},
        error: action.payload,
      };

    default: return state;
  }
};

export default showsReducer;
