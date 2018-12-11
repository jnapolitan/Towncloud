import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';


export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);