import { useNavigate } from "react-router-dom";
import "./NewProducts.scss";

const NewProducts = ({ newProducts, headingText }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="sec-heading">{headingText}</div>
      <div className="categories">
        {newProducts?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <h2>{item.name}</h2>
            <img src={item.img.url} alt="" />
            <p>
              Offer Price&nbsp;&#8377;{item.offerprice}&nbsp;&nbsp;{" "}
              <span> MRP&nbsp;&#8377;{item.mrp}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
