import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Nav from './Nav';
import About from './About';
import Favorites from './Favorites';
import NotFound from './NotFound';
import PokemonDetails from './PokemonDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/pokemons/:pokemonId' component={PokemonDetails} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/about' component={About} />
          <Route exact path='/'><Pokedex pokemons={pokemons} /></Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;