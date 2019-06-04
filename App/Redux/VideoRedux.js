import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
/* ----------- Type and Action Creators ---------------*/

const { Types, Creators } = createActions({
  videoListRequest: [],
  videoListSuccess: ['videos'],
  videoListFailure: ['error']
});

export const VideoTypes = Types;
export default Creators;
/* ------- Initial State ---------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  videos: []
});

export const videoRequest = state =>
  state.merge({
    fetching: true
  });

export const videoSuccess = (state, action) =>
  state.merge({
    fetching: false,
    videos: action.videos
  });

export const videoFailure = (state, { error }) =>
  state.merge({ fetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

export const videoReducer = createReducer(INITIAL_STATE, {
  [Types.VIDEO_LIST_REQUEST]: videoRequest,
  [Types.VIDEO_LIST_SUCCESS]: videoSuccess,
  [Types.VIDEO_LIST_FAILURE]: videoFailure
});
