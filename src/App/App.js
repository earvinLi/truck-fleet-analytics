// External Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Internal Dependencies
import './App.css';
import SignInForm from '../features/Authentication/SignInForm';
import Dashboard from '../features/Dashboard/Dashboard';

// Component Definition
const App = () => (
  <Router>
    <Switch>
      <Route path="/signIn"><SignInForm /></Route>
      <Route path="/dashboard"><Dashboard /></Route>
    </Switch>
  </Router>
);

export default App;
