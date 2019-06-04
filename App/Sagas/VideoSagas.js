import { call, put } from 'redux-saga/effects';

import VideoActions from '../Redux/VideoRedux';

export function* getVideoList(api) {
  const response = yield call(api.getVideos);
  if (response.status === 200) {
    yield put(VideoActions.videoListSuccess(response.data.videos));
  } else {
    yield put(VideoActions.videoListFailure(response.data.message));
  }
}
