// External Dependencies
import React from 'react';

// Material-UI Dependencies
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// Internal Dependencies
import TooltippedButton from '../../components/TooltippedButton';

// Component Definition
const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Truck Fleet Analytics</Typography>
      <div style={{ flexGrow: 1 }} />
      <TooltippedButton
        ariaLabel="account of current user"
        icon={<AccountCircleIcon />}
        onClick={() => {}}
        tooltip="Account"
      />
    </Toolbar>
  </AppBar>
);

export default AppHeader;
