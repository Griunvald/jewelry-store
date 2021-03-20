import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

const localStorageCart = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = {
  cart: { cartItems: localStorageCart },
};
const store = () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk), devToolsEnhancer())
  );

  return store;
};

export default store;
