import { sagaMiddleware } from './store';
import counterSaga from './sagas/counter';
import loggerSaga from './sagas/logger';
import authSaga from './sagas/auth';
import raceTwoDelays from './sagas/race-two-delays';

const init = () => {
  sagaMiddleware.run(counterSaga);
  sagaMiddleware.run(loggerSaga);
  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(raceTwoDelays);
};

export default init;
