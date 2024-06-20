import { createSlice } from '@reduxjs/toolkit'


const initialState = {
        music:[
            {
                id:1,
            }
        ]
    }

export const playerSlice = createSlice({
    name:'playerMusic',
    initialState,
    reducers:{
       
    }
})



export const { } = playerSlice.actions;
export default playerSlice.reducer;