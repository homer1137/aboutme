import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navibar() {
  return (
    <>
      <Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Моя страница</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/">Галлерея</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about">Обо мне</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/detail">Подробности</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
