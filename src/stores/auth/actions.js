import * as types from "./types";

export const login = (params, onSuccess, onFail) => ({
  type: types.LOGIN,
  payload: { params, onSuccess, onFail },
});

export function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS,
    payload: null,
  };
}
export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
  payload: null,
});
