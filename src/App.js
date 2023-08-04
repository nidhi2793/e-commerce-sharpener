import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ProductList from "./Products/ProductList";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <div>
      {cartShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <ProductList />
    </div>
  );
}

export default App;
