import axios from 'axios';
import {
  ADMIN_FORM_SUBMIT_REQUEST,
  ADMIN_FORM_SUBMIT_SUCCESS,
  ADMIN_FORM_SUBMIT_ERROR,
  ADMIN_IMAGE_SUBMIT_REQUEST,
  ADMIN_IMAGE_SUBMIT_SUCCESS,
  ADMIN_IMAGE_SUBMIT_ERROR,
} from '../../store/types';

export const submitForm = (values) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_FORM_SUBMIT_REQUEST });
    const {
      auth: { currentUser },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`,
      },
    };

    const data = await axios.post('/api/v1/items', values, config);
    dispatch({ type: ADMIN_FORM_SUBMIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_FORM_SUBMIT_ERROR, payload: error });
  }
};

export const submitImage = (formData) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_IMAGE_SUBMIT_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const data = await axios.post('/api/v1/image-upload', formData, config);
    dispatch({ type: ADMIN_IMAGE_SUBMIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_IMAGE_SUBMIT_ERROR, payload: error });
  }
};
