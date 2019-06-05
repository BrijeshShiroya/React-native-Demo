import { put } from 'redux-saga/effects';
import AuthActions from '../Redux/AuthRedux';

export function* loginUser(api, action) {
  const { email, password } = action;
  if (
    email.toLowerCase() === 'Admin@gmail.com'.toLowerCase() &&
    password === '123456'
  ) {
    let user = {
      firstname: 'Simform',
      lastname: 'Solutions',
      email: email
    };
    yield put(AuthActions.loginSuccess(user));
  } else {
    alert('Invalid credentials');
    yield put(AuthActions.loginFailure('Invalid credentials'));
  }
}
