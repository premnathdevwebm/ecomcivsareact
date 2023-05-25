import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import NewProducts from "./NewProducts/NewProducts";
import Products from "../Products/Products";
import Attraction from "../Attraction/Attraction"
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts, lovedProduct, newProducts, setNewProducts, setLovedProduct} =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getNewProducts();
        getLovedProducts()
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/products/popular").then((res) => {
            setProducts(res.data);
        });
    };
    const getNewProducts = () => {
        fetchDataFromApi("/products/new").then((res) => {
            setNewProducts(res.data);
        });
    };
    const getLovedProducts = ()=>{
         fetchDataFromApi("/products/loved").then((res) => {
            setLovedProduct(res.data);
        });
    }
    return (
        <div>
            <Banner />
            <Attraction />
            <div className="main-content">
                <div className="layout">
                    <NewProducts headingText="New Arrival" newProducts={newProducts} mostLoved={lovedProduct} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
