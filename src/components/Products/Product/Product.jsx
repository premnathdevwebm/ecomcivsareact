import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

import ImageWithOverlay from "../../ImageComp/ImageComp";

const Product = ({ data, id }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <ImageWithOverlay
          imageUrl={data.attributes.imageSrc}
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.attributes.title}</span>
        <span className="price">
          Selling Price&nbsp;&#8377;{data.attributes.sellingPrice}&nbsp;&nbsp;
        </span>
        <span className="pricestrike">MRP&nbsp;&#8377;{data.attributes.mrpPrice}</span>
      </div>
    </div>
  );
};

export default Product;
