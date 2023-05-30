import { useNavigate } from "react-router-dom";
import "./MostPreferedProduct.scss";
import ImageWithOverlay from "../../ImageComp/ImageComp";
const MostPreferedProduct = ({ lovedProduct }) => {
  const navigate = useNavigate();
  return (
    <>
      {lovedProduct?.map((item) => (
        <div
          key={item.id}
          className="category"
          onClick={() => navigate(`/product/${item.attributes.SKU}`)}
        >
          <h2>{"Marine Collagen"}</h2>
          <ImageWithOverlay
            imageUrl={
              "https://res.cloudinary.com/db58ap8dm/image/upload/v1685264166/uxwfs5ntnxuqw0hg0keq.png"
            }
          />
          <br />
          <br />
          <h5 style={{color: "#926519"}}>Most Prefered Product</h5>
          <p> Shop Now</p>
        </div>
      ))}
    </>
  );
};

export default MostPreferedProduct;
