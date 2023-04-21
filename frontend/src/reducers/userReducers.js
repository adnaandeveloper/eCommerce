import {
  USER_LOGION_FAIL,
  USER_LOGION_REQUEST,
  USER_LOGION_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGION_REQUEST:
      return { loading: true };
    case USER_LOGION_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGION_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
