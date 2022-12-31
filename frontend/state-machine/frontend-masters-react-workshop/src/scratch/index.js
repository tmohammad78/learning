import React, { useEffect, useReducer, useState } from 'react';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

const initialState = "pending";

const alarmReducer = (state,event) => {
  switch(state){
    case 'inactive':
      if(event.type === "TOGGLE") {
        return "pending"
      }
      return state;
    case 'pending':
      if(event.type === "SUCCESS") {
        return "active"
      }
      if(event.type === "TOGGLE") {
        return "inactive"
      }
      return state;
    case "active":
      if(event.type === "TOGGLE") {
        return "inactive"
      }
      return state;
    default:
      return state;
  }
}
export const ScratchApp = () => {
  const [status,dispatch] = useReducer(alarmReducer,initialState)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'SUCCESS'})
    },2000)
    return () => clearTimeout(timer)
  },[status])

  return (
    <div className="scratch">
      <div className="alarm">
        <div className="alarmTime">
          {new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
        <div 
        className="alarmToggle" 
        data-active={status === 'active' || undefined} 
        style={{
          opacity: status === "pending" ? 0.5 : 1
        }}
        onClick={ () => {
          dispatch({ type: 'TOGGLE'})
        }}></div>
      </div>
    </div>
  );
};
