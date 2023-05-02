import axios, { AxiosInstance } from "axios";
import { Image } from "../models";

export interface UploadImageArgs {
  image: File;
  caption: string;
}

interface UploadImageResponse {
  image: Image;
  message: string;
}

interface GetImagesResponse {
  images: Image[];
  message: string;
}

class ImageApi {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
    });
  }

  uploadImage = async (imageDetails: UploadImageArgs) => {
    const data = new FormData();
    data.append("file", imageDetails.image);
    data.append("caption", imageDetails.caption);

    const {
      data: { image: uploadedImage },
    } = await this.axiosInstance.post<UploadImageResponse>("/images", data);

    return uploadedImage;
  };

  fetchImages = async () => {
    const {
      data: { images: fetchedImages },
    } = await this.axiosInstance.get<GetImagesResponse>("/images");
    return fetchedImages;
  };
}

const imageApi = new ImageApi();

export default imageApi;
