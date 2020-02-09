import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ActionType from '../state/action-type';

export default function CounterPage() {
  const value = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: ActionType.Counter.IncrementAsync });
        }}
      >
        Increment after 1 second
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: ActionType.Counter.Increment });
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: ActionType.Counter.Decrement });
        }}
      >
        Decrement
      </button>
      <hr />
      <p>{`Count: ${value}`}</p>
    </>
  );
}
