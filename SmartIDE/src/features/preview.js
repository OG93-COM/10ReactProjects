import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        preview: false
    }
]

export const preview = createSlice({
    name: "preview",
    initialState,
    reducers:{
        togglePreview:(state) => {
            state.preview = !state.preview
        },
        hidePreview:(state) => {
            state.preview = false
        }
    }
})

export const {togglePreview , hidePreview} = preview.actions;

export default preview.reducer;