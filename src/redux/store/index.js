import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger/src";
import rootReducer from "src/redux/reducers";
import { ENABLE_REDUX_LOGGER } from "src/config";

const loggerMiddleware = createLogger();

export const configureStore = (preloadedState = {}) => {
  const middlewares = [thunkMiddleware];

  if(ENABLE_REDUX_LOGGER){
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}