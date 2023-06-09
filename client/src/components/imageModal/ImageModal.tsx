import "./ImageModal.css";

import { FunctionComponent } from "react";
import { Modal } from "..";
import { Image } from "../../models";

interface ImageModalProps {
  selectedImage: Image;
  closeModal: () => void;
}
const ImageModal: FunctionComponent<ImageModalProps> = ({
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
