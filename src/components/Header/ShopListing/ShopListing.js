import React, { useState } from "react";
import "./ShopListing.scss";
const ProductListOnHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleItemClick = (data) => {
    console.log(data);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleListMouseEnter = () => {
    setIsHovered(true);
  };

  const handleListMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="menuList"
    >
      <span>Shop&#x25BE;</span>
      {/* {isHovered && (
        <ul
          onMouseEnter={handleListMouseEnter}
          onMouseLeave={handleListMouseLeave}
        >
          <li onClick={() => handleItemClick("Product 1")}>Marine Collagen</li>
          <li onClick={() => handleItemClick("Product 2")}>Vegan Plant Protein</li>
          <li onClick={() => handleItemClick("Product 3")}>Skin, Hair & Nail Support</li>
          <li onClick={() => handleItemClick("Product 4")}>Curcumin</li>
          <li onClick={() => handleItemClick("Product 5")}>Daily Essentials</li>
          <li onClick={() => handleItemClick("Product 3")}>Skin, Hair & Nail Support</li>
        </ul>
      )} */}
    </div>
  );
};

export default ProductListOnHover;
