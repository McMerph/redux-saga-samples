import ActionType from '../action-type';

export default function counter(state = 0, action) {
  switch (action.type) {
    case ActionType.Counter.Increment:
      return state + 1;
    case ActionType.Counter.Decrement:
      return state - 1;
    default:
      return state;
  }
}
