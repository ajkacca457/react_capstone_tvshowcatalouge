import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import showsReducer from './reducers/showsReducer';

const store = createStore(showsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
