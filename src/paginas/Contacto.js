import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contacto(props) {
  // acá guardo lo que la persona va escribiendo
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [errores, setErrores] = useState({});
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevosErrores = {};

    // validaciones simples antes de aceptar el formulario
    if (nombre.trim().length < 2) {
      nuevosErrores.nombre = 'Escribe un nombre de al menos 2 caracteres.';
    }

    if (!correo.includes('@') || !correo.includes('.')) {
      nuevosErrores.correo = 'Ingresa un correo válido.';
    }

    if (mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      
      if (props.onEnviar) {
        props.onEnviar({ nombre, correo, mensaje });
      }

      setRespuesta('Mensaje registrado correctamente.');

      setNombre('');
      setCorreo('');
      setMensaje('');
    } else {
      setRespuesta('');
    }
  };

  return (
    <section className="contacto">
      <Container>
        <div className="encabezado-pagina">
          <p>✦ Hablemos</p>
          <h1>Contacto</h1>
          <span>
            Completa el formulario para dejarme un mensaje.
          </span>
        </div>

        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>

            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              isInvalid={Boolean(errores.nombre)}
              placeholder="Tu nombre"
            />

            <Form.Control.Feedback type="invalid">
              {errores.nombre}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="correo">
            <Form.Label>Correo</Form.Label>

            <Form.Control
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              isInvalid={Boolean(errores.correo)}
              placeholder="correo@ejemplo.com"
            />

            <Form.Control.Feedback type="invalid">
              {errores.correo}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="mensaje">
            <Form.Label>Mensaje</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              isInvalid={Boolean(errores.mensaje)}
              placeholder="Escribe tu mensaje"
            />

            <Form.Control.Feedback type="invalid">
              {errores.mensaje}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="boton-contacto">
            Enviar mensaje
          </Button>

          {respuesta && (
            <p className="respuesta-formulario" role="status">
              {respuesta}
            </p>
          )}
        </Form>
      </Container>
    </section>
  );
}

export default Contacto;
