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
              "https://civsa.in/assets/uploads/media-uploader/untitled-design-2-removebg-preview1683603699.png"
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
