import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './modules/getData';

const reducer = combineReducers({
  usersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk))

export default store;