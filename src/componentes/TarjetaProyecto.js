import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TarjetaProyecto(props) {
  return (
    <Card className="tarjeta-proyecto">
      <Card.Img
        variant="top"
        src={props.imagen}
        alt={"Imagen de " + props.titulo}
        className="imagen-proyecto"
        loading="lazy"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="titulo-proyecto">
          {props.titulo}
        </Card.Title>

        <Card.Text>
          {props.descripcion}
        </Card.Text>

        <Card.Text className="tecnologias-proyecto">
          <strong>Tecnologías:</strong> {props.tecnologias}
        </Card.Text>

        {props.interno ? (
          <Button
            as={Link}
            to={props.enlace}
            className="boton-proyecto mt-auto"
          >
            {props.textoBoton}
          </Button>
        ) : (
          <Button
            href={props.enlace}
            target="_blank"
            rel="noreferrer"
            className="boton-proyecto mt-auto"
          >
            {props.textoBoton}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default TarjetaProyecto;
