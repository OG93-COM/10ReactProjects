import { configureStore } from "@reduxjs/toolkit";
import tabs from "./features/tabs";

export const store = configureStore({
    reducer:{
        tabs
    }
})