// External Dependencies
import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

// Internal Dependencies
import DriverTelemetryDataTable from './DriverTelemetryDataTable';
import NavigationBar from '../NavigationBar/NavigationBar';
import { getDriverTelemetryData } from './reducers/driverTelemetryDataSlice';

// Component Definition
const DriverDashboard = () => {
  const dispatch = useDispatch();
  const { id: driverId } = useSelector((state) => state.signIn.user);

  useEffect(() => {
    dispatch(getDriverTelemetryData(driverId));
  }, [driverId]);

  return (
    <>
      <NavigationBar />
      <DriverTelemetryDataTable />
    </>
  );
};

export default DriverDashboard;
