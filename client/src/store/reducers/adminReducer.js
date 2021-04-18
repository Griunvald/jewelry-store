import {
  ADMIN_FORM_SUBMIT_REQUEST,
  ADMIN_FORM_SUBMIT_SUCCESS,
  ADMIN_FORM_SUBMIT_ERROR,
  ADMIN_IMAGE_SUBMIT_REQUEST,
  ADMIN_IMAGE_SUBMIT_SUCCESS,
  ADMIN_IMAGE_SUBMIT_ERROR,
} from '../../store/types';

export const submitFormReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ADMIN_FORM_SUBMIT_REQUEST:
      return { loading: true };
    case ADMIN_FORM_SUBMIT_SUCCESS:
      return { loading: false, success: true };
    case ADMIN_FORM_SUBMIT_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const submitImageReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ADMIN_IMAGE_SUBMIT_REQUEST:
      return { loading: true };
    case ADMIN_IMAGE_SUBMIT_SUCCESS:
      return { loading: false, success: true };
    case ADMIN_IMAGE_SUBMIT_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
