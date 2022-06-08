import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {decrement, incremenet, incremenetByAmount} from './counterSlice'
export const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispacth = useDispatch()
  return (
    <div>
        <button className="button" onClick={()=>{
            dispacth(incremenet())
        }}>Increment
        </button>
        <span>{count}</span>
        <button className="button" onClick={()=>{
            dispacth(decrement())
        }}>decrement
        </button>
        <button className="button" onClick={()=>{
          dispacth(incremenetByAmount(2))
        }}>icrement 2</button>
    </div>
  )
}
