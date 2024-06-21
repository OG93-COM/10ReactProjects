import { createSlice } from '@reduxjs/toolkit'


const initialState = {
        current:0,
        totalDuration:0
    }

export const progress = createSlice({
    name:'progress',
    initialState,
    reducers:{
        fillDurationVariables:(state,action) => {
            state.current = action.payload.current
            state.totalDuration = action.payload.totalDuration
        },
        updateProgress:(state,action) => {
            state.current = action.payload
        }
    }
})


export const {fillDurationVariables, updateProgress } = progress.actions;
export default progress.reducer;