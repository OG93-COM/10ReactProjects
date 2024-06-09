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
            } 
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
                value: "#ffffff",
                position: 80
            })
        },
        removeColor:(state,action) => {
            if (state.colors.length == 2) return ;
            state.colors.pop()
        },
        updateAngle :(state, action) => {
            state.angle = action.payload
        }  
 
    }
})



export const { updateColorValue , addColor, removeColor , updateAngle} = gradientSlice.actions;
export default gradientSlice.reducer;