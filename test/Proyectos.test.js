import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Proyectos from '../src/paginas/Proyectos';

describe('Proyectos', () => {
  it('renderiza los tres proyectos', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Proyectos />
      </MemoryRouter>
    );

    expect(getByText('TechStore')).not.toBeNull();
    expect(getByText('Portafolio Personal')).not.toBeNull();
    expect(getByText('Gestor de Tareas')).not.toBeNull();
  });
});
