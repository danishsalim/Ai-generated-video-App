import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: [],
    selectedImage: null,
  },
  reducers: {
    setImage: (state, action) => {
      state.images.unshift(...action.payload);
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = [action.payload];
    },
  },
});

export const { setImage, setSelectedImage } = imageSlice.actions;

export default imageSlice.reducer;
