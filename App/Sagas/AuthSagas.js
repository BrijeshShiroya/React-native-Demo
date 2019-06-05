import { put, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import AuthActions from '../Redux/AuthRedux';

export function* loginUser(api, action) {
  const { email, password } = action;
  const response = yield call(api.userLogin, email, password);
  if (response.status === 200) {
    const user = response.data.token;
    AsyncStorage.setItem('@demo:user', JSON.stringify(user));
    yield put(AuthActions.loginSuccess(user));
  }
  // if (
  //   email.toLowerCase() === 'Admin@gmail.com'.toLowerCase() &&
  //   password === '123456'
  // ) {
  //   let user = {
  //     firstname: 'Simform',
  //     lastname: 'Solutions',
  //     email: email
  //   };
  else {
    yield put(AuthActions.loginFailure('Invalid credentials'));
  }
}
