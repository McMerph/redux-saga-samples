import { sagaMiddleware } from './store';
import counterSaga from './sagas/counter';
import loggerSaga from './sagas/logger';
import authSaga from './sagas/auth';
import raceSaga from './sagas/race';

const init = () => {
  sagaMiddleware.run(counterSaga);
  sagaMiddleware.run(loggerSaga);
  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(raceSaga);
};

export default init;
