import { configureStore } from "@reduxjs/toolkit";
import playList from "./features/playlist";


export const store = configureStore({
    reducer:{
        playList

    }
})

