import { CART_ADD_ITEM } from '../types';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      return { ...state, cartItems: [...state.cartItems, item] };
    default:
      return state;
  }
};
