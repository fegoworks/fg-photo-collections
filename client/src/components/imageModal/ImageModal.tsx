import "./ImageModal.css";

import { FunctionComponent } from "react";
import { Modal } from "..";
import { GalleryArgs } from "../../pages/gallery/Gallery";

interface ImageModalArgs {
  selectedImage: GalleryArgs;
  closeModal: () => void;
}
const ImageModal: FunctionComponent<ImageModalArgs> = ({
  selectedImage,
  closeModal,
}) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="ImageModal">
        <img src={selectedImage.image_url}></img>
      </div>
    </Modal>
  );
};

export default ImageModal;
