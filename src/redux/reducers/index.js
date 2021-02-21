import { combineReducers } from 'redux';
import showsReducer from './showsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  shows: showsReducer,
  filter: filterReducer,

});

export default rootReducer;
