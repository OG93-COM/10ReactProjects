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
        },
        editNoteFromUser: (state,action) => {
            const noteToEditIndex = state.list.findIndex(note => note.id === action.payload.id)
            state.list[noteToEditIndex] = action.payload
        },
        deleteNote:(state,action) => {
            state.list = state.list.filter(note => note.id !== action.payload)
            
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

export const {addNotesApi , addNoteFromUser , editNoteFromUser, deleteNote} = notesSlice.actions
export default notesSlice.reducer