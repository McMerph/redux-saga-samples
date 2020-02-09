import { fork, call, put, take, cancel, cancelled } from 'redux-saga/effects';
import rawAuthorize from '../../domain/authorize';
import storeToken from '../../domain/store-token';
import clearToken from '../../domain/clear-token';
import ActionType from '../action-type';

function* authorize(fail) {
  try {
    yield put({ type: ActionType.Auth.SetInProgress, inProgress: true });
    const token = yield call(rawAuthorize, fail);
    yield put({ type: ActionType.Auth.LoginSuccess, token });
    yield call(storeToken, token);
  } catch (error) {
    yield put({ type: ActionType.Auth.LoginError, error });
  } finally {
    if (yield cancelled()) {
      // eslint-disable-next-line no-console
      console.log('cancelled, you can add custom logick here');
    }
  }
}

export default function* loginFlow() {
  while (true) {
    const { fail } = yield take(ActionType.Auth.LoginRequest);
    const task = yield fork(authorize, fail);
    const action = yield take([
      ActionType.Auth.Logout,
      ActionType.Auth.LoginError,
    ]);
    if (action.type === ActionType.Auth.Logout) {
      yield cancel(task);
    }
    yield call(clearToken);
  }
}
