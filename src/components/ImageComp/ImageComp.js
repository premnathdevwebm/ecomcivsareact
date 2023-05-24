import {useState} from "react"
const ImageWithOverlay = ({ imageUrl }) => {
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    return (
      
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageUrl} alt="Product" className="image" />
        {/* {hovered && (
          <div className="overlay">
            <button className="add-to-cart">Add to Cart</button>
            <button className="add-to-wishlist">Add to Wishlist</button>
          </div>
        )}  */}
      </div>
    );
  };
  
  export default ImageWithOverlay;