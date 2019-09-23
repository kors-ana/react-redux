import { createStore, applyMiddleWare, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import getData from './modules/getData';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleWare(loggerMiddleware)(createStore);

const reducer = combineReducers({
  getData,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;