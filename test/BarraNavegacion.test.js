import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BarraNavegacion from '../src/componentes/BarraNavegacion';

describe('BarraNavegacion', () => {
  it('muestra los enlaces principales', () => {
    const { getByText } = render(
      <MemoryRouter>
        <BarraNavegacion />
      </MemoryRouter>
    );

    expect(getByText('Inicio')).not.toBeNull();
    expect(getByText('Proyectos')).not.toBeNull();
    expect(getByText('Noticias')).not.toBeNull();
    expect(getByText('Contacto')).not.toBeNull();
  });
});
