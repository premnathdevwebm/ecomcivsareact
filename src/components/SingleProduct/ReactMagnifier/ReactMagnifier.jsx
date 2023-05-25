import "./ReactMagnifier.scss";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const ReactMagnifier = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${image === currentImage ? "active" : ""}`}
            onClick={() => handleImageChange(image)}
          >
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
      <div className="main-image-container">
        <ReactImageMagnify
          {...{
            smallImage: {
              src: currentImage,
              alt: "Main Image",
              width: 300,
              height: 400,
            },
            largeImage: {
              src: currentImage,
              width: 900,
              height: 1000,
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "150%",
            },
          }}
        />
      </div>
    </>
  );
};

export default ReactMagnifier;
