import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function DemoTareas() {
  const [texto, setTexto] = useState('');
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Terminar actividad de React', completada: false },
    { id: 2, texto: 'Revisar apuntes', completada: true }
  ]);

  const agregarTarea = (event) => {
    event.preventDefault();

    if (texto.trim() === '') {
      return;
    }

    const nuevaTarea = {
      id: tareas.length + 1,
      texto: texto,
      completada: false
    };

    setTareas([...tareas, nuevaTarea]);
    setTexto('');
  };

  const cambiarEstado = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }

      return tarea;
    });

    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <section className="demo-tareas">
      <Container>
        <div className="encabezado-pagina">
          <p>✦ Proyecto de práctica</p>
          <h1>Gestor de Tareas</h1>
          <span>
            Una demo sencilla para organizar actividades pendientes.
          </span>
        </div>

        <div className="panel-tareas">
          <Form onSubmit={agregarTarea} className="formulario-tarea">
            <Form.Control
              type="text"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Escribe una tarea..."
              aria-label="Nueva tarea"
            />

            <Button type="submit" className="boton-principal">
              Agregar
            </Button>
          </Form>

          <div className="lista-tareas">
            {tareas.map((tarea) => (
              <div
                className={tarea.completada ? 'item-tarea completada' : 'item-tarea'}
                key={tarea.id}
              >
                <button
                  type="button"
                  className="estado-tarea"
                  onClick={() => cambiarEstado(tarea.id)}
                  aria-label="Cambiar estado de la tarea"
                >
                  {tarea.completada ? '✓' : '○'}
                </button>

                <span>{tarea.texto}</span>

                <button
                  type="button"
                  className="eliminar-tarea"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DemoTareas;
