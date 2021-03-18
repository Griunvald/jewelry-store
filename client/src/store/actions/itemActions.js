import {
  ITEMS_LIST_SUCCESS,
  ITEMS_LIST_ERROR,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_ERROR,
} from '../types';
import axios from 'axios';

export const getItemsList = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/items');
    dispatch({ type: ITEMS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ITEMS_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getItemDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/items/${id}`);
    dispatch({ type: ITEM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ITEM_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
