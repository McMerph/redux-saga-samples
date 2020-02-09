import { put, take, takeLatest, call, all } from 'redux-saga/effects';
import delay from '../../utils/delay';
import ActionType from '../action-type';

function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: ActionType.Counter.Increment });
}

function* watchIncrementAsync() {
  yield takeLatest(ActionType.Counter.IncrementAsync, incrementAsync);
}

function* watchFirstThreeIncrements() {
  for (let i = 0; i < 3; i += 1) {
    yield take(ActionType.Counter.Increment);
  }

  // eslint-disable-next-line no-console
  console.log(`increment 3 times`);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchFirstThreeIncrements()]);
}
