import { createConnection } from "typeorm";
import { Images } from "../entities/image.entity";
import config from "./config";

const connectDB = async () => {
  return createConnection({
    type: "postgres",
    url: config.dbUri,
    synchronize: true,
    entities: [Images],
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
};

export default connectDB;
