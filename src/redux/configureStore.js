import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import usersReducer from './modules/getData';
import { watchUsers } from './sagas/users';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  usersReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUsers);

export default store;