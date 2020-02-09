import ActionType from '../action-type';

export default function counter(
  state = { inProgress: false, error: null, token: null },
  action
) {
  switch (action.type) {
    case ActionType.Auth.SetInProgress:
      return { ...state, inProgress: action.inProgress };
    case ActionType.Auth.LoginSuccess:
      return { inProgress: false, error: null, token: action.token };
    case ActionType.Auth.LoginError:
      return { inProgress: false, error: action.error, token: null };
    case ActionType.Auth.Logout:
      return { inProgress: false, error: null, token: null };
    default:
      return state;
  }
}
