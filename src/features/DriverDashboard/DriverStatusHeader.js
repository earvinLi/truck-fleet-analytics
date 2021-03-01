// External Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Material-UI Dependencies
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getDriverStatusHeaderStyles from './styles/driverStatusHeaderStyles';

// Component Definition
const DriverStatusHeader = () => {
  const { userName } = useSelector((state) => state.signIn.user);
  const { telemetryData } = useSelector((state) => state.driverDashboard);

  const { mainContainerStyle } = makeStyles((theme) => getDriverStatusHeaderStyles(theme))();

  return (
    <div className={mainContainerStyle}>
      <Typography variant="h6">
        {
          `Hi ${userName}, welcome!
          You completed ${telemetryData.length} trips this week.
          Very well done.`
        }
      </Typography>
    </div>
  );
};

export default DriverStatusHeader;
