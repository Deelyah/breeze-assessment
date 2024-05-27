import { takeEvery } from 'redux-saga/effects';
import { fetchProfileById, signUp } from '@/features/auth/auth-saga';

import { all } from 'redux-saga/effects';
import {
  signup,
  loginAsUser,
  loginAsAdmin
} from '@/features/auth/auth-reducer';

function* watchAuth() {
  yield takeEvery(signup().type, signUp);
  yield takeEvery(loginAsUser().type, fetchProfileById);
  
}

export function* rootSaga() {
  yield all([watchAuth()]);
}
