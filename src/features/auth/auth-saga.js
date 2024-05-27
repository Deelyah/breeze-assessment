import { stopLoading } from '../app-loader/app-loader-reducer';
import { call, put, select } from 'redux-saga/effects';
import { getUserCredentials } from './auth-reducer';
import { createProfile, getUserByID } from './auth-service';
import { updateUserProfile } from '../userProfile/user-profile-reducer';
export function* fetchProfileById() {
  try {
    const credential = yield select(getUserCredentials);
    const res = yield call(getUserByID, credential.UID);

    if (!res.data()) {
      throw 'invalid email or password';
    } else {
      yield put(updateUserProfile(res.data().data));
      return res.data();
    }
  } catch (error) {
    alert(error);
    console.log(error);
  } finally {
    yield put(stopLoading());
  }
}

export function* signUp() {
  try {
    const credential = yield select(getUserCredentials);
    yield call(createProfile, credential.UID, credential);
    alert('Account created! Login to proceed')
  } catch (error) {
    alert(error)
    console.log(error);
  } finally {
    yield put(stopLoading());
  }
}
