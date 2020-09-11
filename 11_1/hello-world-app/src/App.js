import React from 'react';
import './App.css';
import HelloWord from './HelloWorld.js'
import Image from './Image.js'

function App() {
  const lais = {
    greeting: 'Hello World',
    name: "I'm Lais Gurgel",
    message: 'And this is my first code in React'
  }
  const imgIcon = {
    source: 'https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    alternativeText: 'React Icon'
  }
  const modules = [{name: 'Web Development', skills: 'Shell, HTML, CSS, JavaScript'}, 
  {name: 'Front-end development', skills: 'JavaScript ES6, Jest, React, Agile Methodologies'}]

  return (
    <section>
      <HelloWord greeting={lais.greeting} name={lais.name} message={lais.message}/>
      <Image source={imgIcon.source} alternativeText={imgIcon.alternativeText}/>
    </section>
  );
}

export default App;
