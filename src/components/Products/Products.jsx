import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className={`products ${innerPage ? "innerPage" : ""}`}>
        {products?.data?.map((item) => {
          return (
            <Product
              key={item?.id ?? item.SKU}
              id={item?.id ?? item.SKU}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
