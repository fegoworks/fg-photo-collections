import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image } from "../models";
import { ImageState } from "../store";

const initialState: ImageState = {
  images: [],
  errors: [],
  isUploading: false,
  isSuccessful: false,
  isImagesLoading: false,
};

const ReducerActions = {
  setImages: <T extends ImageState>(
    state: T,
    action: PayloadAction<Image[]>
  ) => {
    state.images = [...action.payload];
    state.isImagesLoading = false;
  },
  setImagesLoading: <T extends ImageState>(state: T) => {
    state.isImagesLoading = true;
  },
  setUploadingImage: <T extends ImageState>(
    state: T,
    action: PayloadAction<boolean>
  ) => {
    state.isUploading = action.payload;
  },
  setUploadSuccessful: <T extends ImageState>(
    state: T,
    action: PayloadAction<Image>
  ) => {
    state.images = [...state.images, action.payload];
    state.isUploading = false;
    state.isSuccessful = true;
  },
  setUploadUnsuccessful: <T extends ImageState>(
    state: T,
    action: PayloadAction<string>
  ) => {
    state.errors = action.payload;
    state.isUploading = false;
  },
  resetState: <T extends ImageState>(
    state: T,
    action: PayloadAction<boolean>
  ) => {
    state.isSuccessful = action.payload;
  },
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: ReducerActions,
});

export const {
  setImages,
  setUploadSuccessful,
  setUploadUnsuccessful,
  setUploadingImage,
  setImagesLoading,
  resetState,
} = imageSlice.actions;

export default imageSlice.reducer;
