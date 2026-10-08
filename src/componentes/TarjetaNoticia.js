import React from 'react';
import Card from 'react-bootstrap/Card';

function TarjetaNoticia(props) {
  return (
    <Card className="tarjeta-noticia">
      <Card.Body>
        <Card.Title className="titulo-noticia">
          {props.titulo}
        </Card.Title>

        <Card.Subtitle className="mb-3 fecha-noticia">
          {props.fecha}
        </Card.Subtitle>

        <Card.Text>
          {props.contenido}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TarjetaNoticia;
