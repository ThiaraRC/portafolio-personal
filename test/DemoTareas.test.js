import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DemoTareas from '../src/paginas/DemoTareas';

describe('DemoTareas', () => {
  it('agrega una tarea nueva', () => {
    const { getByLabelText, getByText } = render(<DemoTareas />);

    fireEvent.change(getByLabelText('Nueva tarea'), {
      target: { value: 'Estudiar React' }
    });

    fireEvent.click(getByText('Agregar'));

    expect(getByText('Estudiar React')).not.toBeNull();
  });

  it('no agrega una tarea vacía', () => {
    const { getByText, getAllByRole } = render(<DemoTareas />);
    const cantidadAntes = getAllByRole('button').length;

    fireEvent.click(getByText('Agregar'));

    expect(getAllByRole('button').length).toBe(cantidadAntes);
  });

  it('cambia el estado de una tarea', () => {
    const { getAllByLabelText, getByText } = render(<DemoTareas />);

    fireEvent.click(getAllByLabelText('Cambiar estado de la tarea')[0]);

    expect(getByText('Terminar actividad de React').parentElement.className)
      .toContain('completada');
  });

  it('elimina una tarea', () => {
    const { getAllByText, queryByText } = render(<DemoTareas />);

    fireEvent.click(getAllByText('Eliminar')[0]);

    expect(queryByText('Terminar actividad de React')).toBeNull();
  });
});
