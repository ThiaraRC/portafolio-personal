import React from 'react';

function SobreMi(props) {
  return (
    <div className="tarjeta-sobre-mi">
      <img
        src={props.foto}
        alt={"Ilustración de " + props.nombre}
        className="foto-perfil"
        loading="lazy"
      />

      <h2>Sobre mí</h2>
      <h3>{props.nombre}</h3>

      <p>{props.descripcion}</p>

      <div className="etiquetas" aria-label="Tecnologías y herramientas">
        <span>React</span>
        <span>JavaScript</span>
        <span>Java</span>
        <span>SQL</span>
        <span>Git</span>
      </div>
    </div>
  );
}

export default SobreMi;
