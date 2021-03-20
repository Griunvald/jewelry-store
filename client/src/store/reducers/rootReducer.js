import { combineReducers } from 'redux';
import { itemsListReducer, itemDetailsReducer } from './itemReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  items_list: itemsListReducer,
  item_details: itemDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
