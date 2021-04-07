import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Form from './Form';

describe('Teste do componente Form', () => {
  test('alterando o valor dos campos e testando o valor guardado', () => {
    render(<Form />);
  
    const inputNome = screen.getByTestId('input-nome');
    expect(inputNome).toHaveValue('');
    fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
    expect(inputNome).toHaveValue('Estudante da Trybe');
  
    const inputEmail = screen.getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });
})

