import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
} from '../types';
import axios from 'axios';

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/items/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      item: data._id,
      title: data.title,
      image: data.image,
      price: data.price,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (values) => (dispatch) => {
  dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: values });
  localStorage.setItem('shippingAddress', JSON.stringify(values));
};
