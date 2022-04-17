import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navibar() {
  // <Nav.Link as={Link} to='/' href='/' > -используется такой код для того чтобы корректно работал
  // react router dom  и react-bootstrap (а именно перходило на страницы без обновлений, и навбар 
  // закрвался после клика по странице(collapseOnSelect)) 
  return (
    <>
      <Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Моя страница</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
              <Nav.Link as={Link} to='/' href='/' >
                Галлерея
              </Nav.Link>
              <Nav.Link as={Link} to='/about' href='/about'>
               Обо мне
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
