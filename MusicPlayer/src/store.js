import { configureStore } from "@reduxjs/toolkit";
import playList from "./features/playlist";
import progress from "./features/progress";


export const store = configureStore({
    reducer:{
        playList,
        progress

    }
})

