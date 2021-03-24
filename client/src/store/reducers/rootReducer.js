import { combineReducers } from 'redux';
import { itemsListReducer, itemDetailsReducer } from './itemReducer';
import { cartReducer } from './cartReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  items_list: itemsListReducer,
  item_details: itemDetailsReducer,
  cart: cartReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
