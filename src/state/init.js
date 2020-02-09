import { sagaMiddleware } from './store';
import counterSaga from './sagas/counter';
import loggerSaga from './sagas/logger';
import authSaga from './sagas/auth';

const init = () => {
  sagaMiddleware.run(counterSaga);
  sagaMiddleware.run(loggerSaga);
  sagaMiddleware.run(authSaga);
};

export default init;
