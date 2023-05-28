import { useNavigate } from "react-router-dom";
import "./NewProducts.scss";
import ImageWithOverlay from "../../ImageComp/ImageComp";
import MostPreferedProduct from "../MostPreferedProduct/MostPreferedProduct";

const NewProducts = ({ newProducts, headingText, mostLoved }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="content1">
        <div className="sec-heading">{headingText}</div>
        <div className="categories">
          {newProducts?.map((item) => (
            <div
              key={item.id}
              className="category"
              onClick={() => navigate(`/product/${item.attributes.SKU}`)}
            >
              <h2>{"Vegan Plant Protien"}</h2>
              <ImageWithOverlay imageUrl={item.attributes.imageSrc} />
              <p>
                Selling Price&nbsp;&#8377;{item.attributes.sellingPrice}
                &nbsp;&nbsp;{" "}
                <span> MRP&nbsp;&#8377;{item.attributes.mrpPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="descripProduct">
        <p>
        Elevate Your Wellbeing with our Exquisite Intake Products: Explore our exceptional collection of carefully curated items, specially crafted to enhance your overall wellness from within. Dive into a world of nourishing supplements, organic superfoods, and rejuvenating elixirs that will invigorate your body and fuel your vitality. We believe in the power of nature's bounty to provide you with the nutrients and goodness you deserve, sourced from sustainable and trusted producers. Whether you seek to boost your energy, support your immune system, or find inner balance, our selection offers a harmonious blend of science-backed formulas and time-honored remedies. Prioritize your wellbeing with our intake products and embark on a transformative journey towards a healthier, more vibrant you.
        </p>
      </div>
      <div className="content2">
        <MostPreferedProduct lovedProduct={mostLoved} />
      </div>
    </div>
  );
};

export default NewProducts;
