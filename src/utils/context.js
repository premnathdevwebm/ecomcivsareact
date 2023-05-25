import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [user, setUser] = useState({ user: undefined, isLoading: false });
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [newProducts, setNewProducts] = useState();
  const [lovedProduct, setLovedProduct] = useState();
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
    cartItems?.map((item) => (count += item.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map((item) => {
      subTotal += item.attributes[item.pack].salePrice * item.quantity;
    });
    setCartSubTotal(subTotal);
  }, [cartItems]);

  useEffect(() => {
    let count = 0;
    wishItems?.map((item) => {
      count += item.quantity;
    });
    setWishCount(count);
    let subTotal = 0;
    wishItems.map((item) => {
      subTotal += item.attributes[item.pack].salePrice * item.quantity;
    });
    setCartSubTotal(subTotal);
  }, [wishItems]);

  const handleUser = ({ user, loading }) => {
    setUser(() => ({ user, isLoading: loading }));
  };

  const handleAddToCart = (product, quantity, pack) => {
    let items = [...cartItems];
    let index = items?.findIndex(
      (p) => p.id === product?.id && p.pack === pack
    );
    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      const tempProduct = { ...product, quantity, pack };
      items = [...items, tempProduct];
    }
    setCartItems(items);
  };

  const handleAddToWish = (product, quantity, pack) => {
    let items = [...wishItems];
    let index = items?.findIndex(
      (p) => p.id === product?.id && p.pack === pack
    );
    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      const tempProduct = { ...product, quantity, pack };
      items = [...items, tempProduct];
    }
    setWishItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter(
      (p) => p.id !== product?.id || p.pack !== product.pack
    );
    setCartItems(items);
  };

  const handleRemoveFromWish = (product) => {
    let items = [...wishItems];
    items = items?.filter(
      (p) => p.id !== product?.id || p.pack !== product.pack
    );
    setWishItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex(
      (p) => p.id === product?.id && p.pack === product.pack
    );
    if (type === "inc") {
      items[index].quantity += 1;
    } else if (type === "dec") {
      if (items[index].quantity === 1) return;
      items[index].quantity -= 1;
    }
    setCartItems(items);
  };

  const handleWishProductQuantity = (type, product) => {
    let items = [...wishItems];
    let index = items?.findIndex(
      (p) => p.id === product?.id && p.pack === product.pack
    );
    if (type === "inc") {
      items[index].quantity += 1;
    } else if (type === "dec") {
      if (items[index].quantity === 1) return;
      items[index].quantity -= 1;
    }
    setWishItems(items);
  };

  return (
    <Context.Provider
      value={{
        user,
        handleUser,
        products,
        setProducts,
        lovedProduct,
        setLovedProduct,
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
