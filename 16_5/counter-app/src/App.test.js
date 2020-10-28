import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
      store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    expect(queryByText('5')).toBeInTheDocument();
  });
  test('with one click the counter should be 1', () => {
    const { queryByText } = renderWithRedux(<App />);
    const clickButton = queryByText('Clique aqui');
    fireEvent.click(clickButton);
    expect(queryByText('1')).toBeInTheDocument();
  });
  test('a click in a button with 10 clicks should increment the value of clicks by 1', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}})
    const clickButton = queryByText('Clique aqui');
    fireEvent.click(clickButton);
    expect(queryByText('11')).toBeInTheDocument();
  });
});