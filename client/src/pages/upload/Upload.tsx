import { FunctionComponent, useEffect, useMemo } from "react";
import { uploadImage } from "../../helpers";
import { UploadImageArgs } from "../../api/imageApi";
import { Card, Form, FormConfig, Message } from "../../components";
import { ImageState, useAppDispatch, useAppSelector } from "../../store";
import uploadValidationSchema from "./uploadValidattionSchema";

const defaultValues = {
  caption: "",
  image: "",
};

const formConfig: FormConfig[] = [
  {
    label: "Select Image",
    name: "image",
    type: "file",
  },
  {
    label: "Caption",
    name: "caption",
    type: "text",
  },
];

const Upload: FunctionComponent = () => {
  const { isUploading, errors, isSuccessful } = useAppSelector(
    (state: { images: ImageState }) => state.images
  );
  const dispatch = useAppDispatch();
  const handleSubmit = async (imageDetails: UploadImageArgs) => {
    await uploadImage(imageDetails, dispatch);
  };

  const messageStr = useMemo(() => {
    if (isSuccessful) {
      return `Upload was successful ❤️.`;
    }

    if (errors) {
      return `Your upload was not successful ❤️‍🩹. ${errors.message}.`;
    }

    return "Processing...";
  }, [errors, isSuccessful, isUploading]);

  if (isSuccessful) {
    return <Message title="Upload" description={messageStr} />;
  }

  return (
    <Card className="upload">
      <Form
        buttonText="Upload"
        config={formConfig}
        defaultValues={defaultValues}
        isLoading={isUploading}
        onSubmit={handleSubmit}
        validationSchema={uploadValidationSchema}
      />
    </Card>
  );
};

export default Upload;
