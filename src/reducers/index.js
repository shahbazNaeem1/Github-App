import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import auth from './authReducer';

const reducers = combineReducers({
  auth,
});

export default createStore(reducers, applyMiddleware(thunk));
