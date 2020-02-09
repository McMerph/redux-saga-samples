import { put, takeLatest, call, all } from 'redux-saga/effects';
import ActionType from '../action-type';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: ActionType.Counter.Increment });
}

function* watchIncrementAsync() {
  yield takeLatest(ActionType.Counter.IncrementAsync, incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
