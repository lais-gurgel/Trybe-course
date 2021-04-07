import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());
describe('Teste do componente App', () => {
  test('Verifica que, quando recebe uma piada, mostra ela na tela', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, "fetch")
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });
  
    const { findByText } = render(<App />);
    await findByText('Whiteboards ... are remarkable.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://icanhazdadjoke.com/',
      {"headers": {"Accept": "application/json"}}
    );
  });

  test('should fetch users', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    global.fetch = jest.fn(()=>
    Promise.resolve({
      json: ()=> Promise.resolve(joke)
    }));
  
    const { findByText } = render(<App />);
    await findByText('Whiteboards ... are remarkable.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
  });


})

