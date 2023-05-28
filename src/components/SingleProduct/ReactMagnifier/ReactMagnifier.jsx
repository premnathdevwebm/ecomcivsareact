import "./ReactMagnifier.scss";
import { useState, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";

const ReactMagnifier = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid black",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  };

  const largeStyle = {
    backgroudColor: "red",
  };

  const enlargedImageContainerStyle = {
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  };

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  useEffect(() => {
    console.log("Current Image:", currentImage);
  }, [currentImage]);

  

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
              height: 300,
              style: imageStyle,
            },
            largeImage: {
              src: currentImage,
              width: 900,
              height: 900,
              style: largeStyle,
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "150%",
              style: enlargedImageContainerStyle,
            },
          }}
        />
      </div>
    </>
  );
};

export default ReactMagnifier;
