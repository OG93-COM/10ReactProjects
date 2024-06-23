import { createSlice } from '@reduxjs/toolkit'


const initialState = {
        songs: undefined,
        play:false,
        currentMusicId: undefined
    }

export const playList = createSlice({
    name:'playList',
    initialState,
    reducers:{
        addBaseSongs: (state,action) => {
            state.songs = action.payload;
            state.currentMusicId = action.payload[0].id;
        },
        toggleLecture:(state,action) => {
            state.play = !state.play
            console.log(state.play)
        },
        nextMusic:(state,action) => {
            if (action.payload === state.songs.length) {
                state.currentMusicId = state.songs[0].id
            } else {
                state.currentMusicId = state.songs[action.payload].id
            }
        },
        prevMusic:(state,action) => {
            if (action.payload < 0) {
                state.currentMusicId = state.songs[state.songs.length - 1].id
            } else {
                state.currentMusicId = state.songs[action.payload].id
            }
        }
    }
})

export function getMusicData(action){
    return function(dispatch,getState){
        fetch("/data/playlist.json")
        .then(data => data.json())
        .then(data => dispatch(addBaseSongs(data.playlist)))
    }
}


export const { addBaseSongs , toggleLecture, nextMusic, prevMusic} = playList.actions;
export default playList.reducer;