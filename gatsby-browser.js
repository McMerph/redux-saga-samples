import 'normalize.css';
import init from './src/state/init';

export { default as wrapRootElement } from './wrap-root-element';
export { default as wrapPageElement } from './wrap-page-element';
export const onClientEntry = init;
