import {configureStore} from "@reduxjs/toolkit";
import userDetail from "../features/getUserSlice.js";

export const store = configureStore({
    reducer:{
        app:userDetail,
    }
})