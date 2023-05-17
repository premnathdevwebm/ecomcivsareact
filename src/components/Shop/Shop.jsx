import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
const Shop = () => {
  const [products, setProducts] = useState({});
  const getProducts = () => {
    fetchDataFromApi("/api/products").then((res) => {
      res = res.data.map(ele=>({...ele, img:{["url"]: ele.secure_url}}))
      setProducts({data:res});
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
