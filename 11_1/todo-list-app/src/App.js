import React from 'react';
import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App.
const todoList = ['study', 'work', 'rest']

function App() {
  return (
    <ul>
      {todoList.map(task => Task(task))}
    </ul>
  );
}

export default App;
