import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetchDataFromApi("/products").then((res) => {
      setProducts(res.data);

      console.log(products);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
     <Products headingText="Available Products" products={products} />
    </div>
  );
};

export default Shop;
