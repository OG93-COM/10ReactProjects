import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        colors:[
            {
                id:1,
                value:"#C04848",
                position:20
            },
            {
                id:2,
                value:"#480048",
                position:50
            },
            {
                id:3,
                value:"#980048",
                position:70
            },
            
            
        ],
        pickedColorId: 1,
        angle: 60
    }

export const gradientSlice = createSlice({
    name:'gradient',
    initialState,
    reducers:{
        updateColorValue: (state,action) => {
            const currentColor = state.colors.find( color => color.id === action.payload.id)
            currentColor.value = action.payload.value
        },
        addColor:(state,action) => {
            if (state.colors.length == 5) return ;
            state.colors.push({
                id: state.colors[state.colors.length - 1].id + 1,
                value: "#111",
                position: 50
            })
        },
        removeColor:(state,action) => {
            if (state.colors.length == 2) return ;
            state.colors.pop()
        }  

        
        
    }
})



export const { updateColorValue , addColor, removeColor } = gradientSlice.actions;
export default gradientSlice.reducer;