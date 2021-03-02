// External Dependencies
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material-UI Dependencies
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Internal Dependencies
import TooltippedButton from '../../components/TooltippedButton';
import { removeUser } from '../Authentication/reducers/signInSlice';

// Component Definition
const AccountIconedMenu = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const dispatch = useDispatch();
  const routeHistory = useHistory();

  const handleOpenMenu = (event) => setAnchorElement(event.currentTarget);
  const handleCloseMenu = () => setAnchorElement(null);

  const handleSignOut = () => {
    dispatch(removeUser());
    window.localStorage.removeItem('userToken');
    routeHistory.push('/signIn');
    handleCloseMenu();
  };

  return (
    <>
      <TooltippedButton
        ariaLabel="account of current user"
        icon={<AccountCircleIcon />}
        onClick={handleOpenMenu}
        tooltip="Account"
      />
      <Menu
        id="account-iconed-menu"
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
        open={Boolean(anchorElement)}
        onClose={handleCloseMenu}
        keepMounted
      >
        <MenuItem>Change Settings</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign Out!</MenuItem>
      </Menu>
    </>
  );
};

export default AccountIconedMenu;
