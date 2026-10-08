import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import datosNoticias from '../datos/noticias.json';
import TarjetaNoticia from '../componentes/TarjetaNoticia';

function Noticias() {
  // dejo el JSON en state para trabajarlo desde React
  const [noticias] = useState(datosNoticias);

  const aprendizaje = noticias.filter(
    (noticia) => noticia.seccion === 'Aprendizaje'
  );

  const portafolio = noticias.filter(
    (noticia) => noticia.seccion === 'Portafolio'
  );

  return (
    <section className="seccion-noticias">
      <Container>
        <div className="encabezado-pagina">
          <p>✦ Novedades</p>
          <h1>Noticias</h1>
          <span>
            Algunos avances y experiencias de mi aprendizaje.
          </span>
        </div>

        <div className="bloque-noticias">
          <h2>Aprendizaje</h2>

          <Row className="g-4">
            {aprendizaje.map((noticia) => (
              <Col md={6} key={noticia.id}>
                <TarjetaNoticia
                  titulo={noticia.titulo}
                  fecha={noticia.fecha}
                  contenido={noticia.contenido}
                />
              </Col>
            ))}
          </Row>
        </div>

        <div className="bloque-noticias">
          <h2>Portafolio</h2>

          <Row className="g-4">
            {portafolio.map((noticia) => (
              <Col md={6} key={noticia.id}>
                <TarjetaNoticia
                  titulo={noticia.titulo}
                  fecha={noticia.fecha}
                  contenido={noticia.contenido}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Noticias;
