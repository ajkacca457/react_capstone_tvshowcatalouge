import { combineReducers } from 'redux';
import showReducers from './showReducers';
import singleshowReducers from './showsingleReducers';

export default combineReducers({
  show: showReducers,
  singleshow: singleshowReducers,
});
