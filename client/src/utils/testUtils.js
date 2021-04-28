import { createStore } from 'redux';
import rootReducer from '../store/reducers/rootReducer';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};
