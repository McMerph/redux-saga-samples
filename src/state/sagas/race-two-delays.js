import { race, delay, takeLatest } from 'redux-saga/effects';
import getRandomInt from '../../utils/get-random-int';
import ActionType from '../action-type';

function* raceTwoDelays() {
  const [ms1, ms2] = new Array(2)
    .fill([500, 1500])
    .map(args => getRandomInt(...args));
  const { first } = yield race({
    first: delay(ms1),
    second: delay(ms2),
  });

  const info = `${ms1} vs ${ms2}`;
  if (first) {
    // eslint-disable-next-line no-console
    console.log(`First wins - ${info}`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Second wins - ${info}`);
  }
}

export default function* watchRaceTwoDelays() {
  yield takeLatest(ActionType.Race, raceTwoDelays);
}
