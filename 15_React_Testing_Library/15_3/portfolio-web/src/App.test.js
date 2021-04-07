import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import About from './pages/About';

describe('Teste da aplicação toda', () => {
  it('Deve renderizar o componente App e Home ao carregar a página', () => {
    renderWithRouter(<App />);
    const home = screen.getByText(/Home Component/);
    expect(home).toBeInTheDocument();
  });

  it('Deve renderizar o componente Sobre ao clicar no link', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = screen.getByText(/About Component/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('Deve renderizar o componente Projetos ao clicar no link', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText(/Projetos/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/projects');
    const aboutAll = screen.getByText(/Projects Component/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('Deve testar se um caminho que não existe renderiza o componente NotFound', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pathNotDefined');
    const pathname = history.location.pathname;
    expect(pathname).toBe('/pathNotDefined');
    const notFound = screen.getByText(/Page Not Found/);
    expect(notFound).toBeInTheDocument();
  });

  it('Deve testar a renderização do componente About', () => {
    renderWithRouter(<About />);
    const aboutAll = screen.getByText(/About Component/);
    expect(aboutAll).toBeInTheDocument();
  });
})
