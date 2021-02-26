// External Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Internal Dependencies
import DataTable from '../../components/DataTable';

const DriverTelemetryDataTable = () => {
  const {
    telemetryData: driverTelemetryData,
  } = useSelector((state) => state.driverDashboard);

  const tableHeadData = [
    'Origin',
    'Destination',
    'Speed',
    'Drive Duration',
    'Fuel Consumption',
    'Fuel Used',
    'Telemetry Data Id',
  ];

  const tableBodyData = driverTelemetryData.map((driverTelemetryDataToUse) => {
    const {
      origin,
      destination,
      speed,
      driveDuration,
      fuelConsumption,
      fuelUsed,
      id,
    } = driverTelemetryDataToUse;

    return {
      origin,
      destination,
      speed,
      driveDuration,
      fuelConsumption,
      fuelUsed,
      id,
    };
  });

  return (
    <DataTable
      tableHeadData={tableHeadData}
      tableBodyData={tableBodyData}
    />
  );
};

export default DriverTelemetryDataTable;
