import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import config from "../config/config";
import { Images } from "../entities/image.entity";
import logger from "../loggers/logger";
import uploadService from "../services/upload.service";
import { BadRequestError, NotFoundError } from "../utils/ApiError";
import { asyncWrapper } from "../utils/AsyncWrapper";

class ImageController {
  saveImage = asyncWrapper(async (req: Request, res: Response) => {
    const file = req.file;
    if (!file) {
      throw new BadRequestError("Error: File is required");
    }
    const image = new Images();
    const data = await uploadService.uploadSingleToCloudinary({
      file,
      opts: {
        folder: config.cloudFolder,
      },
    });

    if (!data) {
      throw new BadRequestError("Error uploading image");
    }

    image.image_url = data?.secure_url;
    image.created_at = new Date();
    const savedImage = await image.save();

    if (!savedImage) {
      throw new BadRequestError("Error saving image");
    }

    logger.info("POST request made for images API.");
    return res.status(StatusCodes.OK).send({
      message: "successful",
      image_url: savedImage.image_url,
    });
  });

  getImage = asyncWrapper(async (req: Request, res: Response) => {
    const images = await Images.find();
    if (!images) {
      throw new NotFoundError("Images not found");
    }

    logger.info("GET request made for images API.");
    return res.status(StatusCodes.OK).send({
      message: "successful",
      images,
    });
  });
}

const imageController = new ImageController();

export default imageController;
