import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            We at Civsa promise to offer you the best tasting, 100% natural
            vegan protein that is plant-based and ideal for weight management as
            well as improving protein intake.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Ceego Labs Pvt Ltd S.No : 84 & 86 , Manjamedu Village , Thennari
              Post, Sungavarchatiram (VIA),Sriperumpudur Pin:631604
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91-95516 91299</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: info@civsa.in</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
          © 2023 All right reserved by Civsa.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
