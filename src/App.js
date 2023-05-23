import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Parent from "./components/Parent/Parent";
import ParentWithoutSubscription from "./components/ParentWithoutSubscription/ParentWithoutSubscription";
import User from "./components/User/index";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/404/404";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Index";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import PaymentFailure from "./components/Payment/PaymentFailure";
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
            <Route path="/auth" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Route>
          <Route path="/payment" element={<Payment />}>
            <Route path="success" element={<PaymentSuccess />} />
            <Route path="failure" element={<PaymentFailure />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
