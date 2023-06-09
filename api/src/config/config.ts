import dotenv from "dotenv";

dotenv.config({ path: __dirname + `/../../.env` });

const config = {
  dbUri: process.env.DATABASE_URI,
  appPort: process.env.APPLICATION_PORT,
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  cloudFolder: process.env.CLOUDINARY_CLOUD_FOLDER,
};

export default config;
