import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={data.img.url}
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.name}</span>
        <span className="price">
          Price&nbsp;&#8377;{data.offerprice}&nbsp;&nbsp;
        </span>
        <span className="pricestrike">MRP&nbsp;&#8377;{data.mrp}</span>
      </div>
    </div>
  );
};

export default Product;
