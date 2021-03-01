// External Dependencies
import React from 'react';

// Material-UI Dependencies
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// Internal Dependencies
import AccountIconedMenu from './AccountIconedMenu';

// Component Definition
const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5">Truck Fleet Analytics</Typography>
      <div style={{ flexGrow: 1 }} />
      <AccountIconedMenu />
    </Toolbar>
  </AppBar>
);

export default AppHeader;
