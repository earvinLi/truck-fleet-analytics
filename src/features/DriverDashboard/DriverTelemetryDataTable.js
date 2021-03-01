// External Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Internal Dependencies
import DataTable from '../../components/DataTable/DataTable';

const DriverTelemetryDataTable = () => {
  const {
    telemetryData: driverTelemetryData,
  } = useSelector((state) => state.driverDashboard);

  const tableHeadData = [
    { id: 'origin', label: 'Origin' },
    { id: 'destination', label: 'Destination' },
    { id: 'speed', label: 'Speed' },
    { id: 'driveDuration', label: 'Drive Duration' },
    { id: 'fuelConsumption', label: 'Fuel Consumption' },
    { id: 'fuelUsed', label: 'Fuel Used' },
    { id: 'id', label: 'Telemetry Data Id' },
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
