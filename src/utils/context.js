import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [newProducts, setNewProducts] = useState();
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map((item) => {
      subTotal += item.data.offerprice * item.attributes.quantity;
    });
    setCartSubTotal(subTotal);
  }, [cartItems]);

  useEffect(() => {
    let count = 0;
    wishItems?.map((item) => (count += item.attributes.quantity));
    setWishCount(count);
    let subTotal = 0;
    wishItems.map((item) => {
      subTotal += item.data.offerprice * item.attributes.quantity;
    });
    setCartSubTotal(subTotal);
  }, [wishItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];

    let index = items?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product = { ...product, attributes: { quantity: 0 } };
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleAddToWish = (product, quantity) => {
    let items = [...wishItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product = { ...product, attributes: { quantity: 0 } };
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setWishItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product?.id);
    setCartItems(items);
  };

  const handleRemoveFromWish = (product) => {
    let items = [...wishItems];
    items = items?.filter((p) => p.id !== product?.id);
    setWishItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  const handleWishProductQuantity = (type, product) => {
    let items = [...wishItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setWishItems(items);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        newProducts,
        setNewProducts,
        categories,
        setCategories,
        cartItems,
        setCartItems,
        wishItems,
        setWishItems,
        handleAddToCart,
        cartCount,
        handleAddToWish,
        wishCount,
        handleRemoveFromCart,
        handleRemoveFromWish,
        showCart,
        setShowCart,
        showWish,
        setShowWish,
        handleCartProductQuantity,
        handleWishProductQuantity,
        cartSubTotal,
        setCartSubTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
