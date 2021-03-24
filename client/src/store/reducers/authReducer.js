import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_REQUEST,
} from '../types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, currentUser: action.payload };
    case LOGIN_ERROR:
      return { loading: false, error: action.payload };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
