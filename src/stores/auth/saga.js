import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import * as req from "./service";
import { loginSuccess } from "./actions";

function* login({ payload }) {
  const { params, onSuccess, onFail } = payload;
  try {
    const { data } = yield call(req.login, params);
    yield onSuccess?.(data);
    yield put(loginSuccess());
    yield put(loginSuccess(saveUserDetails));
  } catch (e) {
    yield onFail?.(e);
  }
}
export default function* authSaga() {
  yield takeLatest(types.LOGIN, login);
}
