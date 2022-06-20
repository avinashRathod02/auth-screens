import * as types from "./types";

const initialState = {
  isLogin: false,
  userDetails: null,
};

export default function authReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case types.LOGIN_SUCCESS:
      return { ...state, isLogin: true };
    case types.LOGIN_SUCCESS:
      return { ...state, userDetails: payload };

    case types.LOGOUT_SUCCESS:
      return { ...state, userDetails: null, isLogin: false };

    default:
      return state;
  }
}
