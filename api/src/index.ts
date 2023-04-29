import express, { Application, Request, Response } from "express";
import connectDB from "./config/orm.config";
import { StatusCodes } from "http-status-codes";
import router from "./routes";
import { NotFoundError } from "./utils/ApiError";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import config from "./config/config";

export const mainServer = () => {
  const app: Application = express();
  const cors = require("cors");
  app.use(express.json());
  app.use(cors());

  // Create connection with database
  connectDB();

  app.get("/", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({
      message: "Images API",
    });
  });

  app.use("/api", router);

  app.use((req: Request) => {
    throw new NotFoundError(req.path);
  });

  app.use(ErrorHandler.handle);

  const port = config.appPort || 3000;

  app.listen(port, () => {
    console.log(`Server is running worker ${process.pid} on port ${port}`);
  });
};
