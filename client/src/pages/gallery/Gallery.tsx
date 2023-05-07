import "./Gallery.css";

import { FunctionComponent, useMemo } from "react";
import { GalleryItem, LoadingSkeleton, Message } from "../../components";
import { ImageState, useAppSelector } from "../../store";

const SKELETON_COLUMNS_COUNT = 14;

const Gallery: FunctionComponent = () => {
  const { images, isImagesLoading } = useAppSelector(
    (state: { images: ImageState }) => state.images
  );

  const orderedImages = useMemo(() => {
    return [...images].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [images]);

  if (isImagesLoading) {
    return (
      <div className="Gallery">
        {[...Array(SKELETON_COLUMNS_COUNT)].map(() => (
          <LoadingSkeleton />
        ))}
      </div>
    );
  }

  if (!orderedImages.length || orderedImages.length === 0) {
    return (
      <Message
        title="Oops❗️"
        description="It looks like there are no uploaded images at this time"
      />
    );
  }

  return (
    <div className="Gallery">
      {orderedImages.map((image) => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
