import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ActionType from '../state/action-type';

export default function CounterPage() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const error = auth.error ? auth.error.message || 'undefined error' : null;
  const { inProgress, token } = auth;
  const alreadyLogged = !inProgress && error === null && token !== null;
  const canLogin = !inProgress && !alreadyLogged;

  return (
    <>
      <button
        type="button"
        disabled={!canLogin}
        onClick={() => {
          dispatch({ type: ActionType.Auth.LoginRequest, fail: false });
        }}
      >
        Login
      </button>
      <button
        type="button"
        disabled={!canLogin}
        onClick={() => {
          dispatch({ type: ActionType.Auth.LoginRequest, fail: true });
        }}
      >
        Login with error
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: ActionType.Auth.Logout });
        }}
      >
        Logout OR cancel login
      </button>
      <hr />
      <p>{`In progress: ${inProgress}`}</p>
      <p>{`Error: ${error}`}</p>
      <p>{`Token: ${token}`}</p>
    </>
  );
}
