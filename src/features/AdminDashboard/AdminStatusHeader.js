// External Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Material-UI Dependencies
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getAdminStatusHeaderStyles from './styles/adminStatusHeaderStyles';

// Component Definition
const AdminStatusHeader = () => {
  const { userName } = useSelector((state) => state.signIn.user);
  const { truckData } = useSelector((state) => state.adminDashboard);

  const { mainContainerStyle } = makeStyles((theme) => getAdminStatusHeaderStyles(theme))();

  return (
    <div className={mainContainerStyle}>
      <Typography variant="h6">
        {
          `Hi ${userName}, welcome!
          Your company owned ${truckData.length} trucks.
          Please check their status here.`
        }
      </Typography>
    </div>
  );
};

export default AdminStatusHeader;
