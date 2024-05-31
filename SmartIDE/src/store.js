import { configureStore } from "@reduxjs/toolkit";
import tabs from "./features/tabs";
import preview from "./features/preview";

export const store = configureStore({
    reducer:{
        tabs,
        preview
    }
})

