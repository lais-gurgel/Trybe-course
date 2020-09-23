import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About';
import Users from './Users';
import Profile from './Profile';
import StrictAccess from './StrictAccess';

function App() {
  const user  = { name:'Lais', id:'1234' }
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
        <Route path='/profile/:complement' render={(props) => <Profile {...props} name='Awesome Lais' />} />
        <Route path='/strict-access'>
          { user.name === 'Lais' && user.id === '1234' ? <StrictAccess user={user} /> : <Users />}
        </Route>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
