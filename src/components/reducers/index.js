import { combineReducers } from 'redux';
import showReducers from './showReducers';

export default combineReducers({
  show: showReducers,
});
