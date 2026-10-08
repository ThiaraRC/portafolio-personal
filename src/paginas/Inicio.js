import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SobreMi from './SobreMi';

function Inicio() {
  return (
    <section className="inicio">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={7} className="presentacion-inicio">
            <p className="saludo">✦ Hola, soy</p>

            <h1>Thiara</h1>
            <h2>Estudiante de Informática</h2>

            <p className="descripcion-inicio">
              Me gusta aprender nuevas tecnologías y llevarlas a proyectos
              concretos. Durante la carrera he trabajado con desarrollo web,
              programación y bases de datos, y sigo practicando para mejorar
              tanto la parte técnica como la forma de resolver problemas.
            </p>

            <div className="botones-inicio">
              <Link to="/proyectos" className="btn boton-principal">
                Mis proyectos
              </Link>

              <Link to="/contacto" className="btn boton-secundario">
                Contacto
              </Link>
            </div>
          </Col>

          <Col md={5}>
            <SobreMi
              nombre="Thiara"
              foto="/portafolio-personal/foto-perfil.jpg"
              descripcion="Soy proactiva, responsable y perseverante. Me gusta aprender haciendo y entender por qué funciona lo que estoy programando. Cuando aparece un problema trato de probar alternativas hasta encontrar una solución. También valoro el trabajo en equipo y seguir mejorando mis conocimientos en informática."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Inicio;
