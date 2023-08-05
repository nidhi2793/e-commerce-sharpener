import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import ProductList from "./Products/ProductList";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";
import About from "./components/Pages/About";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        {cartShown && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />

        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/store" Component={ProductList} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
