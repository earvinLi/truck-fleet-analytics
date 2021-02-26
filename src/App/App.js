// External Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Material-UI Dependencies
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

// Internal Dependencies
import './App.css';
import SignInForm from '../features/Authentication/SignInForm';
import DriverDashboard from '../features/DriverDashboard/DriverDashboard';

// Material-UI theme Configuration
const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      main: '#4AA3DF',
    },
  },
});

// Component Definition
const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/signIn"><SignInForm /></Route>
        <Route path="/driverDashboard"><DriverDashboard /></Route>
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
