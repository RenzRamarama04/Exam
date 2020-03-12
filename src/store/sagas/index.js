import { fork, all } from 'redux-saga/effects';
import {
  socialImageWatcher,
} from './social';

function* rootSaga() {
  yield all([
    fork(socialImageWatcher),
  ]);
}

export default rootSaga;
