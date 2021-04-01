import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
} from '../types';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      return { ...state, cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.item !== action.payload
        ),
      };
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
