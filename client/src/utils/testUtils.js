import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store/reducers/rootReducer';
import { middlewares } from '../store/store';

export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};
