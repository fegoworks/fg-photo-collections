import { Readable } from "stream";
import toStream = require("buffer-to-stream");
import { createReadStream } from "fs";
import config from "../config/config";

import {
  ConfigOptions,
  UploadApiOptions,
  UploadApiResponse,
  v2 as Cloudinary,
} from "cloudinary";

type File = Express.Multer.File;

class UploadService {
  constructor(private readonly options: ConfigOptions) {
    Cloudinary.config(options);
  }

  private async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on("error", (error) => reject(error))
        .on("data", (data) => buffer.push(data))
        .on("end", () => resolve(Buffer.concat(buffer)))
    );
  }

  async uploadSingleToCloudinary(args: {
    opts: UploadApiOptions;
    file: File;
  }): Promise<UploadApiResponse | undefined> {
    const createdStream = createReadStream(args.file.path);
    const buffer = await this.streamToBuffer(createdStream);
    return this.cloudinary(buffer, args.opts.folder);
  }

  private async cloudinary(
    buffer: Buffer,
    folder?: string
  ): Promise<UploadApiResponse | undefined> {
    return await new Promise((resolve, reject) => {
      const upload = Cloudinary.uploader.upload_stream(
        { folder: folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      toStream(buffer).pipe(upload);
    });
  }
}

const uploadService = new UploadService({
  cloud_name: config.cloudName,
  api_key: config.apiKey,
  api_secret: config.apiSecret,
});

export default uploadService;
