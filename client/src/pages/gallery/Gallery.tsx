import "./Gallery.css";

import { FunctionComponent, useMemo, useState } from "react";
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

  const orderedImages = useMemo(() => {
    return [...images].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [images]);

  return (
    <div className="Gallery">
      {orderedImages.map((image) => (
        <Card key={image.id} className={`image-container `}>
          <div className="image-item">
            <div className="image">
              <img
                src={image.image_url}
                alt={
                  image?.image_caption
                    ? image.image_caption.toLocaleLowerCase()
                    : "image"
                }
                onClick={() => setSelectedImage(image)}></img>
            </div>
            <div className="image-caption">
              {image?.image_caption || "Image"}
            </div>
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
