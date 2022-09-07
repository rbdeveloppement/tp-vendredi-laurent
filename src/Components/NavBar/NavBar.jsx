import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import SwitchColor from "../switchColor/SwitchColor";

function NavBar({ isDark, setIsDark }) {
  return (
    <>
      <Navbar
        className={`${
          isDark
            ? "Navbar-dark bg-dark text-light"
            : "Navbar-light bg-light text-dark"
        }`}
      >
        <Container>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Produits</NavLink>
          </Nav>
          <div>
        <SwitchColor isDark={isDark} setIsDark={setIsDark} />
      </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
