import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "./HeaderCartBurtton";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="header">
      <Container>
        <Navbar.Brand href="/">The Generics</Navbar.Brand>
        <Nav
          className="justify-content-center "
          variant="underline"
          id="navBar"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/auth">LogIn</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </Nav>
        <Nav className="justify-content-end">
          <HeaderCartButton onClick={props.onShowCart} />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
