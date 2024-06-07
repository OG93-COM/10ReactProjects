import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        session:{
            value:1500,
            runningValue:1500
        },
        pauses:{
            value:300,
            runningValue:300
        },
        isPlaying:false,
        intervalId: undefined,
        cycle: 0,
        displayedValue:{
            value:1350,
            heading:"Work"
        }
    }

export const chrono = createSlice({
    name:'chrono',
    initialState,
    reducers:{
        
        }
})

export const {updateChrono} = chrono.actions;
export default chrono.reducer;