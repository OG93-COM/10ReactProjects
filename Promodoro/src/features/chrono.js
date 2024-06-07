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
        },
        tick: (state, action) => {
            console.log("tick")
            state.displayedValue.value -= 1;
        },
        setUpChrono: (state, action) => {
            state.isPlaying = true;
            state.intervalId = action.payload;
        },
        resetChrono: (state, action) => {
            window.clearInterval(state.intervalId)
            state.isPlaying = false
            state.displayedValue.value = state.session.value
        }
        
    }
})

export function startChrono(action){
    return function(dispatch, getState) {
        const intervalId = setInterval(() => {
            dispatch(tick())
        },1000)
        dispatch(setUpChrono(intervalId))
        dispatch(tick())
    } 
}

export const {updateChronoValues, resetChrono, setUpChrono, tick} = chrono.actions;
export default chrono.reducer;