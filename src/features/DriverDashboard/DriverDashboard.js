// External Dependencies
import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import NavigationBar from '../NavigationBar/NavigationBar';
import DriverStatusHeader from './DriverStatusHeader';
import DriverTelemetryDataTable from './DriverTelemetryDataTable';
import AppFooter from '../AppFooter/AppFooter';
import { getDriverTelemetryData } from './reducers/driverTelemetryDataSlice';
import getDriverDashboardStyles from './styles/driverDashboardStyles';

// Component Definition
const DriverDashboard = () => {
  const {
    rootStyle,
  } = makeStyles((theme) => getDriverDashboardStyles(theme))();

  const dispatch = useDispatch();
  const { id: driverId } = useSelector((state) => state.signIn.user);

  useEffect(() => {
    dispatch(getDriverTelemetryData(driverId));
  }, [driverId]);

  return (
    <div className={rootStyle}>
      <NavigationBar />
      <DriverStatusHeader />
      <DriverTelemetryDataTable />
      <AppFooter />
    </div>
  );
};

export default DriverDashboard;
