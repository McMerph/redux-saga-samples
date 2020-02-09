import { race, delay, takeLatest } from 'redux-saga/effects';
import getRandomInt from '../../utils/get-random-int';
import ActionType from '../action-type';

function* raceTwoDelays() {
  const { first } = yield race({
    first: delay(getRandomInt(500, 1500)),
    second: delay(1000),
  });

  if (first) {
    // eslint-disable-next-line no-console
    console.log(`First wins`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Second wins`);
  }
}

export default function* watchRaceTwoDelays() {
  yield takeLatest(ActionType.Race, raceTwoDelays);
}
