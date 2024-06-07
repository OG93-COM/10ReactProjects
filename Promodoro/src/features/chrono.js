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
            value:1500,
            heading:"Work"
        }
    }

export const chrono = createSlice({
    name:'chrono',
    initialState,
    reducers:{ 

        updateChronoValues: (state, action) => {
            const choosenState = state[action.payload.type]
            // Block State
            if(choosenState.value + action.payload.value === 0) return;

            if(action.payload.type === "session") {
                if(!state.isPlaying) {
                    choosenState.value = choosenState.value + action.payload.value;
                    choosenState.runningValue = choosenState.runningValue + action.payload.value;
                    state.displayedValue.value = choosenState.runningValue;
                } else {
                    choosenState.value = choosenState.value + action.payload.value;
                }
            } else if(action.payload.type === "pauses") {
                choosenState.value = choosenState.value + action.payload.value;
            }
        }
        
    }
})

export const {updateChronoValues} = chrono.actions;
export default chrono.reducer;