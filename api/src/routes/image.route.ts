import express from "express";
import multer from "multer";
import imageController from "../controllers/image.controller";

const imageRoute = express.Router();
const storage = multer.diskStorage({});

let upload = multer({
  storage,
});

imageRoute.get("/", imageController.getImage);

imageRoute.post("/", upload.single("file"), imageController.saveImage);

export default imageRoute;
