import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
/* ----------- Type and Action Creators ---------------*/

const { Types, Creators } = createActions({
  clearAll: [],
  loginRequest: ['email', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['error']
});

export const AuthTypes = Types;
export default Creators;
/* ------- Initial State ---------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  user: null,
  isUserLoggedIn: false
});

export const clear = state =>
  state.merge({
    isUserLoggedIn: false,
    fetching: false,
    error: null,
    user: null
  });

export const userLoginRequest = state =>
  state.merge({
    fetching: true,
    error: null,
    user: null
  });

export const userLoginSuccess = (state, action) =>
  state.merge({
    isUserLoggedIn: true,
    fetching: false,
    user: action.user,
    error: null
  });

export const userLoginFailure = (state, { error }) =>
  state.merge({ fetching: false, error, isUserLoggedIn: false });

/* ------------- Hookup Reducers To Types ------------- */

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: userLoginRequest,
  [Types.LOGIN_SUCCESS]: userLoginSuccess,
  [Types.LOGIN_FAILURE]: userLoginFailure,
  [Types.CLEAR_ALL]: clear
});
