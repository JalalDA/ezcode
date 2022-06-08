import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },
    reducers : {
        incremenet : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        incremenetByAmount : (state, action)=>{
            state.value += action.payload
        }
    }
})

export const {incremenet, decrement, incremenetByAmount} = counterSlice.actions

export default counterSlice.reducer