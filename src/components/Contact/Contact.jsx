import React, { useState } from "react";
import MapComp from "./MapComp";
import "./Contact.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us-container">
      <div className="contactContainRow">
        <div className="contactContainCol" >
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="contact-details"></div>
        </div>
        <div className="contactContainCol">
          <MapComp />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
