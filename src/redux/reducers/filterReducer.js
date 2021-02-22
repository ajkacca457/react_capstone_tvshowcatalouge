import { CHANGE_FILTER } from '../actions/filterAction';

export const initialstate = {
  filter: '',
};

const filterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: action.payload,
      };
    default: return state;
  }
};

export default filterReducer;
