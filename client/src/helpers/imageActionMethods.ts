import { AnyAction, Dispatch } from "redux";
import imageApi, { UploadImageArgs } from "../api/imageApi";
import {
  setImages,
  setImagesLoading,
  setUploadingImage,
  setUploadSuccessful,
  setUploadUnsuccessful,
} from "../reducers/imageReducer";

export const uploadImage = (
  imageDetails: UploadImageArgs,
  dispatch: Dispatch<AnyAction>
) => {
  dispatch(setUploadingImage(true));
  return imageApi
    .uploadImage(imageDetails)
    .then((data) => {
      dispatch(setUploadSuccessful(data));
      return { data };
    })
    .catch((e) => {
      dispatch(setUploadUnsuccessful(e.message));
      return { error: e };
    });
};

export const fetchImages = (dispactch: Dispatch<AnyAction>) => {
  dispactch(setImagesLoading());
  return imageApi.fetchImages().then((data) => {
    dispactch(setImages(data));
    return { data };
  });
};
