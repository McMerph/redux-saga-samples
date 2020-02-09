import React from 'react';
import { useDispatch } from 'react-redux';
import ActionType from '../state/action-type';

export default function CounterPage() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: ActionType.Race });
        }}
      >
        Start race (check console for result)
      </button>
    </>
  );
}
