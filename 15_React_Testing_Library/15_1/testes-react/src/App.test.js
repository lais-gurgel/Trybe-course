import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// Acessar os elementos da sua tela
// Interagir com eles (se houver necessidade)
// Fazer seu teste

describe('Tela de inserção de email', () => {
  it('Verifica que há um campo de email na tela', () => {
    // Acessar os elementos da sua tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
  
    // Fazer seu teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  it('Verifica que há dois botões', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
  
    expect(button.length).toBe(2);
  })
  
  it("Verifica que há um botão 'Enviar'", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');
  
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar')
  })
  
  it('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    // Acessar os elementos da sua tela
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    
    // Interagir com eles (se houver necessidade)
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    
    // Fazer seu teste
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
})
