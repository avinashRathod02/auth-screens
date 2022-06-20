import * as types from "./types";

const initialState = {
  isLogin: false,
};

export default function authReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case types.LOGIN_SUCCESS:
      return { ...state, isLogin: true };

    case types.LOGOUT_SUCCESS:
      return { ...state, isLogin: false };

    default:
      return state;
  }
}
