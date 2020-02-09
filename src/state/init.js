import { sagaMiddleware } from './store';
import counterSaga from './sagas/counter';
import loggerSaga from './sagas/logger';

const init = () => {
  sagaMiddleware.run(counterSaga);
  sagaMiddleware.run(loggerSaga);
};

export default init;
