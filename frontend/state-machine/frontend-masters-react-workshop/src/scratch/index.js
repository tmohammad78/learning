import React, { useEffect, useReducer, useState } from 'react';
import { assign, createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

const initialState = "pending";

const incrementCount = () => assign({
  count: (context) => context.count + 1
})

const alarmMachine = createMachine({
  initial: 'inactive',
  context:{
    count: 0
  },
  states: {
    inactive: {
      entry: 'telemetry',
      on: {
        TOGGLE:{
          target:  "pending",
          actions: 'incrementCount'
        },
      }
    },
    pending: {
      on: {
        SUCCESS: "active",
        TOGGLE: 'inactive'
      }
    },
    active:   {
      on: {
        TOGGLE: "inactive"
      }
    }
  }
}, {
  actions:{
    incrementCount:incrementCount
  }
})
// It was sample object we can use state machine instead
// const alarmMachine = {
//   initial: 'inactive',
//   states: {
//     inactive: {
//       on: {
//         TOGGLE: "pending"
//       }
//     },
//     pending: {
//       on: {
//         SUCCESS: "active",
//         TOGGLE: 'inactive'
//       }
//     },
//     active:   {
//       on: {
//         TOGGLE: "inactive"
//       }
//     }
//   }
// }
const alarmReducer = (state,event) => {
  // const nextState = alarmMachine.states[state].on[event.type] || state;
  const nextState = alarmMachine.transition(state,event)
  return nextState;
  // switch(state){
  //   case 'inactive':
  //     if(event.type === "TOGGLE") {
  //       return "pending"
  //     }
  //     return state;
  //   case 'pending':
  //     if(event.type === "SUCCESS") {
  //       return "active"
  //     }
  //     if(event.type === "TOGGLE") {
  //       return "inactive"
  //     }
  //     return state;
  //   case "active":
  //     if(event.type === "TOGGLE") {
  //       return "inactive"
  //     }
  //     return state;
  //   default:
  //     return state;
  // }
}
export const ScratchApp = () => {
  // const [state,dispatch] = useReducer(alarmReducer,alarmMachine.initialState)
  const [state,send] = useMachine(alarmMachine, { 
    actions: { /// We can pass an action here , or pass to createMachine function as another argument
      incrementCount: assign({
        count: (context,event) => context.count + 100
      }),
      telemetry: (context,event) => {
        console.log(context,event,'this is telemetry')
      }
    }
  })
  const status = state.value;
  const { count } = state.context;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      send({ type: 'SUCCESS'})
    },2000)
    return () => clearTimeout(timer)
  },[status,send])

  return (
    <div className="scratch">
      <div className="alarm">
        <div className="alarmTime">
          {new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          })}
          ({count})
        </div>
        <div 
        className="alarmToggle" 
        data-active={status === 'active' || undefined} 
        style={{
          opacity: status === "pending" ? 0.5 : 1
        }}
        onClick={ () => {
          send({ type: 'TOGGLE'})
        }}></div>
      </div>
    </div>
  );
};
