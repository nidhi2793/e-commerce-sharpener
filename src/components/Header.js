import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header({ onClick }) {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Store">Store</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Button variant="outline-primary" onClick={onClick}>
            Cart
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
