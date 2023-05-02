import "./Gallery.css";

import { FunctionComponent, useState } from "react";
import { Card, ImageModal } from "../../components";
import { ImageState, useAppSelector } from "../../store";

export interface GalleryArgs {
  image_url: string;
  image_caption?: string;
}
const Gallery: FunctionComponent = () => {
  const { images } = useAppSelector(
    (state: { images: ImageState }) => state.images
  );

  const [selectedImage, setSelectedImage] = useState<GalleryArgs | null>(null);

  if (!images) return <div>loading</div>;

  return (
    <div className="gallery">
      {images.map((i) => (
        <Card key={i.id} className={`image-container `}>
          <div className="image-item">
            <div className="image">
              <img
                src={i.image_url}
                alt={
                  i?.image_caption ? i.image_caption.toLocaleLowerCase() : "img"
                }
                onClick={() => setSelectedImage(i)}></img>
            </div>
            <div className="image-caption">{i?.image_caption || ""}</div>
          </div>
        </Card>
      ))}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          closeModal={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
