import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Parent from "./components/Parent/Parent";
import ParentWithoutSubscription from "./components/ParentWithoutSubscription/ParentWithoutSubscription";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/404/404";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Checkout from "./components/Checkout/Checkout";
import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/" element={<ParentWithoutSubscription />}>
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
