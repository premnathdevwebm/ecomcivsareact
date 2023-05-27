import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ReactImageMagnify from "./ReactMagnifier/ReactMagnifier";
import HorizontalTab from "../Horizontal/Horizontal";

//import RelatedProducts from "./RelatedProducts/RelatedProducts";
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
  const [type, setType] = useState("singleContainer");
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

  const handleTypeChange = (selectedType) => {
    let ContainerComponent;
    switch (selectedType) {
      case "singleContainer":
        ContainerComponent = "singleContainer";
        break;
      case "doubleContainer":
        ContainerComponent = "doubleContainer";
        break;
      case "tripleContainer":
        ContainerComponent = "tripleContainer";
        break;
      default:
        ContainerComponent = "singleContainer";
    }
    setType(ContainerComponent);
  };
  if (!data) return;
  const product = data.data[0];

  const tabs = [
    { title: "DESCRIPTION", content: product.attributes.description },
    { title: "INGREDIENTS", content: product.attributes.ingredients },
    { title: "NUTRITIONAL INFO", content: product.attributes.nutritioinalInfo },
    { title: "BENEFITS AND USES", content: product.attributes.benefitAndUses },
    { title: "FAQ", content: product.attributes.faq },
  ];

  return (
    <>
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <ReactImageMagnify
                images={[
                  ...(product.attributes[type].imageSrc
                    ? [
                        ...product.attributes[type].imageSrc
                          ?.split(",")
                          .map((item) => item.trim()),
                      ]
                    : []),
                ]}
              />
            </div>
            <div className="right">
              <span className="name">{product.attributes?.[type].title}</span>
              <span className="price">
                Price &nbsp;&#8377;{product.attributes?.[type].salePrice}
              </span>
              <span className="strikeprice">
                MRP: &nbsp;&#8377;{product.attributes?.[type].mrpPrice}
              </span>
              <span className="category">
                Category: &nbsp;{product.attributes?.category}
              </span>
              <span className="summary">
                Summary: &nbsp;{product.attributes?.summary}
              </span>
              <div className="btnGroup">
                {product.attributes.type === "pack" ? "Packs" : "Flavour"}{" "}
                <button
                  style={{
                    backgroundColor: `${
                      !product?.attributes?.singleContainer?.isActive && "gray"
                    }`,
                    color: `${
                      !product?.attributes?.singleContainer?.isActive && "black"
                    }`,
                  }}
                  disabled={!product?.attributes?.singleContainer?.isActive}
                  onClick={() => handleTypeChange("singleContainer")}
                >
                  1
                </button>{" "}
                <button
                  style={{
                    backgroundColor: `${
                      !product?.attributes?.doubleContainer?.isActive && "gray"
                    }`,

                    color: `${
                      !product?.attributes?.doubleContainer?.isActive && "black"
                    }`,
                  }}
                  disabled={!product?.attributes?.doubleContainer?.isActive}
                  onClick={() => handleTypeChange("doubleContainer")}
                >
                  2
                </button>{" "}
                <button
                  style={{
                    backgroundColor: `${
                      !product?.attributes?.tripleContainer?.isActive && "gray"
                    }`,
                    color: `${
                      !product?.attributes?.tripleContainer?.isActive && "black"
                    }`,
                  }}
                  disabled={!product?.attributes?.tripleContainer?.isActive}
                  onClick={() => handleTypeChange("tripleContainer")}
                >
                  3
                </button>
              </div>
              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={decrement}>-</span>
                  <span>{quantity}</span>
                  <span onClick={increment}>+</span>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    handleAddToCart(product, quantity, type);
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
                    handleAddToWish(product, quantity, type);
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
          {/* 
          <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        /> 
        */}
        </div>
      </div>
      {product?.attributes?.combo?.isComboed && <>Combo</>}
      <HorizontalTab tabs={tabs} />
    </>
  );
};

export default SingleProduct;
