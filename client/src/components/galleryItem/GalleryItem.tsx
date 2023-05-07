import "./GalleryItem.css";

import { FunctionComponent, useState } from "react";
import { Image } from "../../models";
import { Card, ImageModal, LoadingSkeleton } from "..";

interface GalleryItemProps {
  image: Image;
}
const GalleryItem: FunctionComponent<GalleryItemProps> = ({ image }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  return (
    <>
      {!loaded && <LoadingSkeleton />}
      <Card className={`image-container `}>
        <div className="image-item">
          <div className="image">
            <img
              src={image.image_url}
              alt={
                image?.image_caption
                  ? image.image_caption.toLocaleLowerCase()
                  : "image"
              }
              onClick={() => setSelectedImage(image)}
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="image-caption">{image?.image_caption || "Image"}</div>
        </div>
      </Card>
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          closeModal={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default GalleryItem;
