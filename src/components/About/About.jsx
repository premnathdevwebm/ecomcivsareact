import React from "react";
import AboutImg from "../../assets/About.png";
import "./About.scss"
const About = () => {
  return (
    <div className="wrapper">
      <div className="imageBox">
        <img src={AboutImg} alt="" />
      </div>
      <div className="contextcontent">
        <span>ABOUT US</span>
        <h3>INDUSTRY-FIRST INNOVATIONS</h3>
        <p>
          At Scoop on Top, we believe in authenticity and transparency. We only
          use clinically researched products and provide protein test
          certificates with every purchase. Our goal is to provide our customers
          with the best possible experience and to help them reach their fitness
          goals. We are committed to always being on the forefront of the latest
          research and developments in the world of nutrition and fitness.
        </p>
      </div>
    </div>
  );
};

export default About;
