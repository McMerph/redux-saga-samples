const ActionType = {
  Counter: {
    Increment: 'COUNTER_INCREMENT',
    Decrement: 'COUNTER_DECREMENT',
    IncrementAsync: 'COUNTER_INCREMENT_ASYNC',
  },
  Auth: {
    LoginRequest: 'AUTH_LOGIN_REQUEST',
    SetInProgress: 'AUTH_SET_IN_PROGRESS',
    LoginSuccess: 'AUTH_LOGIN_SUCCESS',
    LoginError: 'AUTH_LOGIN_ERROR',
    Logout: 'AUTH_LOGOUT',
  },
  Race: 'RACE',
};

export default Object.freeze(ActionType);
