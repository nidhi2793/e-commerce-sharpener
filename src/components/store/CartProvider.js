import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  products: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.product.price * action.product.amount;
    const existingCartItemIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );
    const existingCartItem = state.products[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.product.amount,
      };
      updatedItems = [...state.products];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.products.concat(action.product);
    }
    return {
      products: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.products.findIndex(
      (product) => product.id === action.id
    );
    const existingItem = state.products[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.products.filter(
        (product) => product.id !== action.id
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.products];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      products: updatedItems,
      totalAmount: updatedTotalAmount,
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
