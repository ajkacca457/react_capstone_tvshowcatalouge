import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE } from '../actions/type';

const initialstate = {
  loading: false,
  shows: [],
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
        error: '',
      };

    case FETCH_SHOWS_FAILURE:
      return {
        loading: false,
        shows: [],
        error: action.payload,
      };

    default: return state;
  }
};

export default showsReducer;
