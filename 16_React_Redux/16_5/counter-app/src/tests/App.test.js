import { screen, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helpers';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    expect(screen.queryByText('5')).toBeInTheDocument();
  });
  test('with one click the counter should be 1', () => {
    renderWithRedux(<App />);
    const clickButton = screen.queryByText('Clique aqui');
    fireEvent.click(clickButton);
    expect(screen.queryByText('1')).toBeInTheDocument();
  });
  test('a click in a button with 10 clicks should increment the value of clicks by 1', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}})
    const clickButton = screen.queryByText('Clique aqui');
    fireEvent.click(clickButton);
    expect(screen.queryByText('11')).toBeInTheDocument();
  });
});