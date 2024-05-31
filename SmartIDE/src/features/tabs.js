import {htmlIcon, cssIcon, jsIcon} from '../assets/index.js'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id:1,
        lang:"html",
        imageUrl: htmlIcon,
        buttonContent: "HTML",
        code:`
        <div>
            <h1>React Code Editor</h1>
            <p>Coding Live</p>
        </div>`
    },
    {
        id:2,
        lang:"css",
        imageUrl: cssIcon,
        buttonContent: "CSS",
        code:`body{
            font-family:Roboto, sans-serif;
            padding: 25px;
            color:#111;
            background-color: #f1f1f1;
        }
        `
    },
    {
        id:3,
        lang:"js",
        imageUrl: jsIcon ,
        buttonContent: "JavaScript",
        code:`console.log('Hello World');
        `
    }
]

export const codeUpdater = createSlice({
    name:'code-updater',
    initialState,
    reducers:{
        updateCode:(state,action) =>{
            state.find(obj => obj.id === action.payload.id).code = action.payload.value
        }
    }
})

export const {updateCode} = codeUpdater.actions;
export default codeUpdater.reducer;