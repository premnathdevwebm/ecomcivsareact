import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import ShopList from "./ShopListing/ShopListing"
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";
import logo from "../../assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, wishCount, showCart, showWish, setShowCart, setShowWish } =
    useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/shop")}><ShopList /></li>
            <li onClick={() => navigate("/blog")}>Blog</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            <img src={logo} style={{ widows: "75px", height: "75px" }} alt="" />
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
            <span
              className="cart-icon"
              onClick={() => {
                setShowCart(false);
                setShowWish(true);
              }}
            >
              <AiOutlineHeart />
              <span className="badge">0</span>
              {!!wishCount && <span>{wishCount}</span>}
            </span>
            <span
              className="cart-icon"
              onClick={() => {
                setShowWish(false);
                setShowCart(true);
              }}
            >
              <CgShoppingCart />
              <span className="badge">0</span>
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            <span className="cart-icon">
              <FaUserCircle onClick={() => navigate("/auth")} />
            </span>
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
      {showWish && <Wish />}
    </>
  );
};

export default Header;
