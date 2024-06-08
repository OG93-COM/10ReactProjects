import { configureStore } from "@reduxjs/toolkit";
import gradient from "./features/gradient";


export const store = configureStore({
    reducer:{
        gradient
        
    }
})

