import React from "react";
import { useNavigate } from "react-router-dom";
import "./404.scss";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="parent">
      <div className="container">
        <div className="containerHead">404</div><br/>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <button onClick={() => navigate("/")}>Go To Homepage</button>
      </div>
    </div>
  );
};

export default NotFound;
