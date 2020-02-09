import { select, take } from 'redux-saga/effects';

export default function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ action, state }, null, 2));
  }
}
