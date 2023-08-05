import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "./HeaderCartBurtton";

function Header(props) {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      // style={{ marginBottom: 30 }}
    >
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <HeaderCartButton onClick={props.onShowCart} />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
