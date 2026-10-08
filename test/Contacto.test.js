import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contacto from '../src/paginas/Contacto';

describe('Contacto', () => {
  it('muestra errores cuando el formulario está vacío', () => {
    const { getByText } = render(<Contacto />);

    fireEvent.click(getByText('Enviar mensaje'));

    expect(
      getByText('Escribe un nombre de al menos 2 caracteres.')
    ).not.toBeNull();

    expect(
      getByText('Ingresa un correo válido.')
    ).not.toBeNull();

    expect(
      getByText('El mensaje debe tener al menos 10 caracteres.')
    ).not.toBeNull();
  });

  it('actualiza el state y acepta datos válidos', () => {
    const { getByLabelText, getByText } = render(<Contacto />);

    fireEvent.change(getByLabelText('Nombre'), {
      target: { value: 'Thiara' }
    });

    fireEvent.change(getByLabelText('Correo'), {
      target: { value: 'thiara@correo.cl' }
    });

    fireEvent.change(getByLabelText('Mensaje'), {
      target: { value: 'Este es un mensaje válido para la prueba.' }
    });

    fireEvent.click(getByText('Enviar mensaje'));

    expect(
      getByText('Mensaje registrado correctamente.')
    ).not.toBeNull();
  });

  it('simula el envío usando un spy de Jasmine', () => {
    const enviar = jasmine.createSpy('enviar');
    const { getByLabelText, getByText } = render(
      <Contacto onEnviar={enviar} />
    );

    fireEvent.change(getByLabelText('Nombre'), {
      target: { value: 'Thiara' }
    });

    fireEvent.change(getByLabelText('Correo'), {
      target: { value: 'thiara@correo.cl' }
    });

    fireEvent.change(getByLabelText('Mensaje'), {
      target: { value: 'Mensaje de prueba para simular el envío.' }
    });

    fireEvent.click(getByText('Enviar mensaje'));

    expect(enviar).toHaveBeenCalled();
  });

});
