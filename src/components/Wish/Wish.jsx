import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import WishItem from "./WishItem/WishItem";

import "./Wish.scss";

const Wish = () => {
  const { wishItems, setWishItems, setCartSubTotal, setCartItems, setShowWish, cartSubTotal } =
    useContext(Context);

  const handleAddToCart = () => {
    setCartItems(() => [...wishItems]);
    setCartSubTotal(()=>[...wishItems].reduce((accumulator, currentValue)=>accumulator + currentValue.data.offerprice, 0))
    setWishItems(() => []);
    setShowWish(() => false);
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowWish(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Wish Listing</span>
          <span className="close-btn" onClick={() => setShowWish(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>

        {!wishItems.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No wish in the list.</span>
            <button className="return-cta" onClick={() => {}}>
              ADD TO CART
            </button>
          </div>
        )}

        {!!wishItems.length && (
          <>
            <WishItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handleAddToCart}>
                  Proceed
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wish;
