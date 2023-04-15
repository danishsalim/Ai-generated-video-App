import { createSlice } from "@reduxjs/toolkit";

const textAudioSlice = createSlice({
  name: "text",
  initialState: {
    text : "",
    audio :null,
  },
  reducers: {
    setText(state, action) {
      state.text = action.payload
    },
    setAudio(state, action) {
        state.audio = action.payload
      },
  },
});

export const { setText , setAudio } = textAudioSlice.actions;

export default textAudioSlice.reducer;