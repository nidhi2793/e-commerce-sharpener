import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import productsArr from "./data";

const ProductList = () => {
  return (
    <Container>
      <Row xs={1} lg={2} className="g-4">
        {productsArr.map((product) => (
          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price{product.price}</Card.Text>
                <Button>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
