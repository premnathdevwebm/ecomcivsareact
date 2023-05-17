import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";

import "./WishItem.scss";
const WishItem = () => {
  const { wishItems, handleRemoveFromWish, handleWishProductQuantity } =
    useContext(Context);

  return (
    <div className="cart-products">
      {wishItems?.map((item) => {
        item = {attributes:item.attributes, ...item.data}
        return (
          <div className="search-result-item" key={item?.id ?? item?.SKU} onClick={() => {}}>
            <div className="image-container">
              <img
                src={
                  item.secure_url
                }
              />
            </div>
            <div className="prod-details">
              <span className="name">{item.name}</span>
              <MdClose
                className="close-btn"
                onClick={() => handleRemoveFromWish(item)}
              />
              <div className="quantity-buttons">
                <span onClick={() => handleWishProductQuantity("dec", item)}>
                  -
                </span>
                <span>{item.attributes.quantity}</span>
                <span onClick={() => handleWishProductQuantity("inc", item)}>
                  +
                </span>
              </div>
              <div className="text">
                <span>{item.attributes.quantity}</span>
                <span>x</span>
                <span className="highlight">
                  <span>&#8377;</span>
                  {item.offerprice * item.attributes.quantity}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishItem;
