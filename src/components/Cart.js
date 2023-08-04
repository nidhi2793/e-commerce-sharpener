import React from "react";
import classes from "./Cart.module.css";
import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";

const cartElements = (
  <ul className={classes["cart-items"]}>
    {[
      {
        title: "Colors",

        price: 100,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

        quantity: 2,
      },

      {
        title: "Black and white Colors",

        price: 50,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

        quantity: 3,
      },

      {
        title: "Yellow and Black Colors",

        price: 70,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

        quantity: 1,
      },
    ].map((item) => (
      <li>{item.title}</li>
    ))}
  </ul>
);

const Cart = () => {
  return (
    <Modal>
      {cartElements}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>500</span>
      </div>
      <div className={classes.actions}>
        <Button variant="danger" style={{ marginRight: 5 }}>
          Close
        </Button>
        <Button variant="primary">Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
