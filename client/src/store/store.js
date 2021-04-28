import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

const localStorageCart = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const localStorageCurrentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

const localStorageShippingAddress = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: localStorageCart,
    shippingAddress: localStorageShippingAddress,
  },
  auth: { currentUser: localStorageCurrentUser },
};

export const middlewares = [thunk];
const store = () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devToolsEnhancer())
  );

  return store;
};

export default store;
