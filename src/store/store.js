import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice"
import textAudioReducer from "./textAudioSlice"


const store = configureStore({
      reducer:{
        image:imageReducer,
        text :textAudioReducer,
    },
})

export default store;