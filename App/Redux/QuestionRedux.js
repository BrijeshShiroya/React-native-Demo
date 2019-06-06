import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
/* ----------- Type and Action Creators ---------------*/

const { Types, Creators } = createActions({
  allQuestionRequest: ['order', 'sort'],
  allQuestionSuccess: ['questions'],
  allQuestionFailure: ['error']
});

export const QuestionTypes = Types;
export default Creators;
/* ------- Initial State ---------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  questions: [],
  hasMore: false
});

export const questionRequest = state =>
  state.merge({
    fetching: true,
    error: null,
    questions: [],
    hasMore: false
  });

export const questionSuccess = (state, action) =>
  state.merge({
    fetching: false,
    questions: action.questions.items,
    error: null,
    hasMore: action.questions.has_more
  });

export const questionFailure = (state, { error }) =>
  state.merge({ fetching: false, error, questions: [], hasMore: false });

/* ------------- Hookup Reducers To Types ------------- */

export const questionReducer = createReducer(INITIAL_STATE, {
  [Types.ALL_QUESTION_REQUEST]: questionRequest,
  [Types.ALL_QUESTION_SUCCESS]: questionSuccess,
  [Types.ALL_QUESTION_FAILURE]: questionFailure
});
