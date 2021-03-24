import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, currentUser: action.payload };
    case LOGIN_ERROR:
      return { loading: false, error: action.payload };
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, currentUser: action.payload };
    case REGISTER_ERROR:
      return { loading: false, error: action.payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
