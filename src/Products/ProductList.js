import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    // <Container>
    //   {productsArr.map((product) => (
    //     <Card style={{ width: "18rem" }}>
    //       <Card.Img variant="top" src={product.imageUrl} />
    //       <Card.Body>
    //         <Card.Title>{product.title}</Card.Title>
    //         <Card.Text>Price {product.price}</Card.Text>
    //       </Card.Body>
    //     </Card>
    //   ))}
    // </Container>
  );
};

export default ProductList;
