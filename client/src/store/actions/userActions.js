import axios from 'axios';
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
} from '../types';

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      auth: { currentUser },
    } = getState();

    const { data } = await axios.get(`/api/v1/users/${id}`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
