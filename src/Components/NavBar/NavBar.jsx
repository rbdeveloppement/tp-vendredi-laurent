import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header () {
  return (
    <>
      <Navbar >
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">Produits</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;