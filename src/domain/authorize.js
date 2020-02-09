import delay from '../utils/delay';

const uuidv4 = require('uuid/v4');

export default async function authorize(fail = false) {
  await delay(1000);
  if (fail) {
    throw new Error('Fail');
  }

  return uuidv4();
}
