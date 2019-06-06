import { put, call } from 'redux-saga/effects';
import QuestionActions from '../Redux/QuestionRedux';

export function* getAllQuestions(api, action) {
  const { order, sort } = action;
  const response = yield call(api.getAllQuestions, order, sort);
  if (response.status === 200) {
    yield put(QuestionActions.allQuestionSuccess(response.data));
  } else {
    yield put(QuestionActions.allQuestionFailure(response.data.message));
  }
}
