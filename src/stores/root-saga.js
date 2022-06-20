import {all, takeEvery} from 'redux-saga/effects'
import {REHYDRATE} from 'redux-persist/src/constants'

import auth from 'stores/auth/saga'

export default function* rootSaga() {
  yield takeEvery(REHYDRATE, function* boot() {
    yield all([auth()])
  })
}
