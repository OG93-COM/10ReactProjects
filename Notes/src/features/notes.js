import {createSlice}  from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    list:undefined
}

export const notesSlice = createSlice({
    name:"notes",
    initialState,
    reducers:{
        addNotesApi:(state,action) => {
            state.list = action.payload
        },
        addNoteFromUser:(state,action) => {
            state.list.push(action.payload)
        }
    }
})

//Middleware function
export function getNoteFromApi(action) {
    return function(dispatch,getState){
        fetch('/data/notes.json')
        .then(res => res.json())
        .then(data => dispatch(addNotesApi(data.notes)))
    }
}

export const {addNotesApi , addNoteFromUser} = notesSlice.actions
export default notesSlice.reducer