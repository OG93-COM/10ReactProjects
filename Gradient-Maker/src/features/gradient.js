import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        colors:[
            {
                id:1,
                value:"#00d2ff",
                position:20
            },
            {
                id:2,
                value:"#ee9ca7",
                position:50
            },
        ],
        pickedColorId: 1,
        angle: 60
    }

export const gradientSlice = createSlice({
    name:'gradient',
    initialState,
    reducers:{ 

        
        
    }
})



export const {} = gradientSlice.actions;
export default gradientSlice.reducer;