import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from '../types';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(
      '/api/v1/users/login',
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
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
