import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TarjetaProyecto from '../componentes/TarjetaProyecto';

function Proyectos() {
  return (
    <section className="seccion-proyectos">
      <Container>
        <div className="encabezado-pagina">
          <p>✦ Portafolio</p>
          <h1>Mis proyectos</h1>
          <span>
            Algunos trabajos y ejercicios que he realizado durante mi formación.
          </span>
        </div>

        <Row className="g-4">
          {/* reutilizo la tarjeta y cambio su contenido con props */}
          <Col md={4}>
            <TarjetaProyecto
              imagen="https://raw.githubusercontent.com/ThiaraRC/portafolio-personal/main/public/techstore.jpg"
              titulo="TechStore"
              descripcion="Proyecto web realizado en un equipo de cuatro integrantes. Mi parte estuvo enfocada en la lógica y las validaciones del sitio, especialmente en formularios y comprobación de datos."
              tecnologias="HTML, CSS y JavaScript"
              enlace="https://github.com/ThiaraRC/TechStore"
              textoBoton="Ver repositorio"
            />
          </Col>

          <Col md={4}>
            <TarjetaProyecto
              imagen="https://raw.githubusercontent.com/ThiaraRC/portafolio-personal/main/public/portafolio-personal.jpg"
              titulo="Portafolio Personal"
              descripcion="Portafolio desarrollado con React para reunir mis proyectos, noticias y una sección de contacto. En este trabajo practiqué componentes, props, state, JSON, Bootstrap y pruebas unitarias."
              tecnologias="React, Bootstrap, JSON, Jasmine y Karma"
              enlace="https://github.com/ThiaraRC/portafolio-personal"
              textoBoton="Ver repositorio"
            />
          </Col>

          <Col md={4}>
            <TarjetaProyecto
              imagen="https://raw.githubusercontent.com/ThiaraRC/portafolio-personal/main/public/gestor-tareas.svg"
              titulo="Gestor de Tareas"
              descripcion="Ejercicio de práctica hecho con React para trabajar con state y eventos. Permite agregar tareas, cambiar su estado y eliminarlas desde una interfaz simple."
              tecnologias="React y Bootstrap"
              enlace="/demo-tareas"
              textoBoton="Ver demo"
              interno={true}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Proyectos;
