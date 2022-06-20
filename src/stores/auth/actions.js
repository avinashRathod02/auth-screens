import * as types from "./types";

export const login = (params, onSuccess, onFail) => ({
  type: types.LOGIN,
  payload: { params, onSuccess, onFail },
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
  payload: null,
});

export const saveUserDetails = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
  payload: null,
});
