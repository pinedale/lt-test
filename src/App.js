import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import './App.style.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/people/:page" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
