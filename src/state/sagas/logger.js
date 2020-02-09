import { select, takeEvery } from 'redux-saga/effects';

export default function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ action, state }, null, 2));
  });
}
