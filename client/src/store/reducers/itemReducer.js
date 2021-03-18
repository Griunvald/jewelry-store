import {
  ITEMS_LIST_SUCCESS,
  ITEMS_LIST_ERROR,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_ERROR,
} from '../types';

export const itemsListReducer = (
  state = {
    loading: true,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case ITEMS_LIST_SUCCESS:
      return {
        loading: false,
        items: action.payload,
      };
    case ITEMS_LIST_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const itemDetailsReducer = (
  state = {
    loading: true,
    items: {},
  },
  action
) => {
  switch (action.type) {
    case ITEM_DETAILS_SUCCESS:
      return {
        loading: false,
        item: action.payload,
      };
    case ITEM_DETAILS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
