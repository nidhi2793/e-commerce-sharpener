import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../components/store/CartContext";

const Product = (props) => {
  const CartCtx = useContext(CartContext);

  const handleAddToCart = () => {
    CartCtx.addItem({
      title: props.title,
      price: props.price,
      amount: 1,
      id: props.title,
    });
  };

  return (
    <Col lg={3}>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Price{props.price}</Card.Text>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
