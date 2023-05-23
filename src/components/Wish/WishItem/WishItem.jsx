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
        return (
          <div className="search-result-item" key={item?.id} onClick={() => {}}>
            <div className="image-container">
              <img
                src={
                  item.attributes.imageSrc
                }
              />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <MdClose
                className="close-btn"
                onClick={() => handleRemoveFromWish(item)}
              />
              <div className="quantity-buttons">
                <span onClick={() => handleWishProductQuantity("dec", item)}>
                  -
                </span>
                <span>{item.quantity}</span>
                <span onClick={() => handleWishProductQuantity("inc", item)}>
                  +
                </span>
              </div>
              <div className="text">
                <span>{item.quantity}</span>
                <span>x</span>
                <span className="highlight">
                  <span>&#8377;</span>
                  {item.attributes.sellingPrice * item.quantity}
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
