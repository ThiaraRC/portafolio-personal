import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Inicio from '../src/paginas/Inicio';

describe('Inicio', () => {
  it('muestra la presentación y el componente SobreMi', () => {
    const { getAllByText, getByText, getByAltText } = render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    expect(getAllByText('Thiara').length).toBeGreaterThan(0);
    expect(getByText('Estudiante de Informática')).not.toBeNull();
    expect(getByText('Sobre mí')).not.toBeNull();
    expect(getByAltText('Ilustración de Thiara')).not.toBeNull();
  });
});
