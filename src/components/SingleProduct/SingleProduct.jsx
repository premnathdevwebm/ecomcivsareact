import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ReactImageMagnify from "./ReactMagnifier/ReactMagnifier";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
  FaRegHeart,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart, handleAddToWish } = useContext(Context);
  const { data } = useFetch(`/products/sku/${id}`);
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  const product = data.data[0];
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <ReactImageMagnify img={product.attributes.imageSrc} />
          </div>
          <div className="right">
            <span className="name">{product.attributes?.title}</span>
            <span className="price">
              Price &nbsp;&#8377;{product.attributes?.sellingPrice}
            </span>
            <span className="strikeprice">MRP &nbsp;&#8377;{product.attributes?.mrpPrice}</span>
            <span className="category">Category &nbsp;{product.attributes?.Category}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(product, quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
              &nbsp;&nbsp;
              <button
                className="add-to-wish-button"
                onClick={() => {
                  handleAddToWish(product, quantity);
                  setQuantity(1);
                }}
              >
                <FaRegHeart size={20} />
                ADD TO WISH
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Name: <span>{product.attributes?.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        /> */}
      </div>
    </div>
  );
};

export default SingleProduct;
