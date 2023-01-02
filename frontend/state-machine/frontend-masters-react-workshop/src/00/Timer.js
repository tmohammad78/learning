import * as React from 'react';
import { useReducer } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressCircle } from '../ProgressCircle';

// Import the timer machine and its initial state:
// import { ... } from './timerMachine';

const initialState = 'idle'
const timerMachine = {
  initial: 'idle',
  states:{
    idle: {
      on: {
        TOGGLE: 'running'
      }
    },
    running: {
      on: {
          TOGGLE: 'paused'
      }
    },
    paused: {
      on: {
        TOGGLE: "running",
        RESET: "idle"
      }
    }
  }
}
const timerReducer = (state,event) => {
  const nextState = timerMachine.states[state].on[event.type] || state;
  return nextState;
}
export const Timer = () => {
  const [state,dispatch]  = useReducer(timerReducer,initialState)

  const { duration, elapsed, interval } = {
    duration: 60,
    elapsed: 0,
    interval: 0.1,
  };

  return (
    <div
      className="timer"
      data-state={state}
      style={{
        // @ts-ignore
        '--duration': duration,
        '--elapsed': elapsed,
        '--interval': interval,
      }}
    >
      <header>
        <h1>Exercise 00</h1>
      </header>
      <ProgressCircle />
      <div className="display">
        <div className="label">{state}</div>
        <div
          className="elapsed"
          onClick={() => {
            dispatch({ type: "TOGGLE "})
          }}
        >
          {Math.ceil(duration - elapsed)}
        </div>
        <div className="controls">
         {state === 'running' && (
            <button
            onClick={() => {
              dispatch({ type: "RESET "})
              }}
            >
              Reset
            </button>
         )}
        </div>
      </div>
      <div className="actions">
       {state === 'running' && (
          <button
          onClick={() => {
            dispatch({ type: "TOGGLE"})
          }}
          title="Pause timer"
        >
          <FontAwesomeIcon icon={faPause} />
        </button>
        )}

        {(state === 'idle' || state === 'paused') && (
          <button
          onClick={() => {
            dispatch({ type: 'TOGGLE'})
          }}
          title="Start timer"
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
        )}
      </div>
    </div>
  );
};
