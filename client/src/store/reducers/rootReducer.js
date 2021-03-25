import { combineReducers } from 'redux';
import { itemsListReducer, itemDetailsReducer } from './itemReducer';
import { cartReducer } from './cartReducer';
import { authReducer } from './authReducer';
import { userDetailsReducer } from './userDetailsReducer';

const rootReducer = combineReducers({
  items_list: itemsListReducer,
  item_details: itemDetailsReducer,
  cart: cartReducer,
  auth: authReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
