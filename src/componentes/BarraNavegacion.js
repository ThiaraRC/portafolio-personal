import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <Navbar expand="lg" className="barra-navegacion">
      <Container>
        <Link to="/" className="navbar-brand marca">
          Thiara.dev
        </Link>

        <Navbar.Toggle aria-controls="menu-navegacion" />

        <Navbar.Collapse id="menu-navegacion">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/proyectos" className="nav-link">Proyectos</Link>
            <Link to="/noticias" className="nav-link">Noticias</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
