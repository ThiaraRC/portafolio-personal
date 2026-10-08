import React from 'react';
import { render } from '@testing-library/react';
import Noticias from '../src/paginas/Noticias';

describe('Noticias', () => {
  it('carga las noticias desde el JSON y las muestra en el DOM', () => {
    const { getByText } = render(<Noticias />);

    expect(getByText('Aprendizaje')).not.toBeNull();
    expect(getByText('Portafolio')).not.toBeNull();

    expect(
      getByText('Aprendiendo componentes en React')
    ).not.toBeNull();

    expect(
      getByText('Creación de mi portafolio personal')
    ).not.toBeNull();
  });
});
