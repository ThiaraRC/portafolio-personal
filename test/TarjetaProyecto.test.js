import React from 'react';
import { render } from '@testing-library/react';
import TarjetaProyecto from '../src/componentes/TarjetaProyecto';

describe('TarjetaProyecto', () => {
  it('muestra los datos que llegan por props', () => {
    const { getByText, getByAltText } = render(
      <TarjetaProyecto
        imagen="/techstore.jpg"
        titulo="Proyecto de prueba"
        descripcion="Descripción de prueba"
        tecnologias="React"
        enlace="https://github.com/"
        textoBoton="Ver repositorio"
      />
    );

    expect(getByText('Proyecto de prueba')).not.toBeNull();
    expect(getByText('Descripción de prueba')).not.toBeNull();
    expect(getByAltText('Imagen de Proyecto de prueba')).not.toBeNull();
  });
});
