import { sagaMiddleware } from './store';
import counterSaga from './sagas/counter';

const init = () => {
  sagaMiddleware.run(counterSaga);
};

export default init;
