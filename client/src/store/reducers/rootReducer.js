import { combineReducers } from 'redux';
import { itemsListReducer, itemDetailsReducer } from './itemReducer';

const rootReducer = combineReducers({
  items_list: itemsListReducer,
  item_details: itemDetailsReducer,
});

export default rootReducer;
