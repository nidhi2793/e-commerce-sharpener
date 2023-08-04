import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ProductList from "./Products/ProductList";
import Cart from "./components/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <ProductList />
    </CartProvider>
  );
}

export default App;
