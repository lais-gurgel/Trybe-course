import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = ({ target }) => {
    setNewTask(target.value);
  }

  const addTask = () => {
    setTask(tasks.concat(newTask))
    setNewTask('');
  }

  useEffect( () => {
    
  })

  return (
    <div className="App">
      <header>
        <h1>
          TO DO LIST!
        </h1>
        <input
          onChange={handleChange}
          type="text"
        />
        <button type="button" onClick={addTask}>ADD TASK</button>
        <br />
        <br />
        <ul>
          {
            tasks.map((task, index) => <li key={index}>{task}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
