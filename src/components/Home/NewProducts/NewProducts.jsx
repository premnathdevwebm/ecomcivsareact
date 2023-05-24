import { useNavigate } from "react-router-dom";
import "./NewProducts.scss";
import ImageWithOverlay from "../../ImageComp/ImageComp";

const NewProducts = ({ newProducts, headingText }) => {
  console.log(newProducts);
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="sec-heading">{headingText}</div>
      <div className="categories">
        {newProducts?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/product/${item.attributes.SKU}`)}
          >
            <h2>{item.attributes.title}</h2>
            <ImageWithOverlay imageUrl={item.attributes.imageSrc}  />
            <p>
              Sell Price&nbsp;&#8377;{item.attributes.sellingPrice}&nbsp;&nbsp;{" "}
              <span> MRP&nbsp;&#8377;{item.attributes.mrpPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
