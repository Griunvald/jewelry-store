import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT,
} from '../types';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post('/api/v1/users/login', {
      email,
      password,
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('currentUser', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post('/api/v1/users/signup', {
      name,
      email,
      password,
    });
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('currentUser', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('currentUser');
  dispatch({ type: LOGOUT });
};
