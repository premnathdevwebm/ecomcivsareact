import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";

function Parent() {
  return (
    <div>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Parent;