import React from 'react';
import { render } from '@testing-library/react';
import TarjetaNoticia from '../src/componentes/TarjetaNoticia';

describe('TarjetaNoticia', () => {
  it('muestra la información que recibe por props', () => {
    const { getByText } = render(
      <TarjetaNoticia
        titulo="Noticia de prueba"
        fecha="08-10-2026"
        contenido="Contenido para probar la tarjeta."
      />
    );

    expect(getByText('Noticia de prueba')).not.toBeNull();
    expect(getByText('08-10-2026')).not.toBeNull();
    expect(getByText('Contenido para probar la tarjeta.')).not.toBeNull();
  });
});
