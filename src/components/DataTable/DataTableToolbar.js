/* eslint-disable react/prop-types */
// External Dependencies
import React from 'react';

// Material-UI Dependencies
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import TooltippedButton from '../TooltippedButton';
import getDataTableToolbarStyles from './styles/dataTableToolbarStyles';

// Component Definition
const DataTable = () => {
  const {
    toolBarTitleStyle,
  } = makeStyles((theme) => getDataTableToolbarStyles(theme))();

  const handleRefetchData = () => {};

  return (
    <Toolbar>
      <Typography
        className={toolBarTitleStyle}
        variant="h6"
      >
        Your trips&apos; telemetry data
      </Typography>
      <TooltippedButton
        ariaLabel="refetch telemetry data"
        icon={<RefreshIcon color="action" />}
        onClick={handleRefetchData}
        tooltip="Refresh"
      />
    </Toolbar>
  );
};

export default DataTable;
