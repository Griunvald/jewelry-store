import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

const localStorageCart = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const localStorageUserInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: localStorageCart },
  auth: { userInfo: localStorageUserInfo },
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
