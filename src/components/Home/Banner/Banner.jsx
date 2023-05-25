import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.scss";
import VerticalCarousel from "./VerticalCarousel/VerticalCarousel";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content column-1">
        <div className="text-content">
          <h1>CIVSA </h1>
          <p>
            WELLNESS AND BEYOND
            <br />
            Nurture your mind, body, and soul with our wellness brand
          </p>
          <p className="launch_date">
            Gear Up! Launch sale starts at 10pm on Thursday 01/06/2023!
          </p>
          <div className="ctas">
            <div className="banner-cta v2" onClick={() => navigate("/shop")}>
              Shop Now
            </div>
          </div>
        </div>
      </div>
      <VerticalCarousel className="column-2" />
    </div>
  );
};

export default Banner;
