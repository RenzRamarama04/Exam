import { takeLatest, call, put } from 'redux-saga/effects';

import {
    GET_SOCIALIMG_REQUEST,
    GET_SOCIALIMG_SUCCESS,
    GET_SOCIALIMG_FAILURE
} from '../actions/actiontypes';

import {
  getSocialImg,
} from '../api/social';

/*  */
function* socialImageWorker(action) {
  try {
    const result = yield call(getSocialImg, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_SOCIALIMG_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_SOCIALIMG_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_SOCIALIMG_FAILURE });
  }
}

export function* socialImageWatcher() {
  yield takeLatest(GET_SOCIALIMG_REQUEST, socialImageWorker);
}
