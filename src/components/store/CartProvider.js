import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  products: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.products.concat(action.product);
    const updatedAmount =
      state.totalAmount + action.product.price * action.product.amount;
    return {
      products: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (product) => {
    dispatchCartAction({ type: "ADD", product: product });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
