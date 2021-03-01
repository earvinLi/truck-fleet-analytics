// External Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Internal Dependencies
import DataTable from '../../components/DataTable/DataTable';

const DriverTelemetryDataTable = () => {
  const {
    truckData: companyTruckData,
  } = useSelector((state) => state.adminDashboard);

  const tableHeadData = [
    { id: 'id', label: 'Truck Id' },
    { id: 'tankStop', label: 'Tank Stop' },
    { id: 'fuelLevel', label: 'Fuel Level' },
    { id: 'checkEngineLight', label: 'Check Engine Light' },
  ];

  const tableBodyData = companyTruckData.map((companyTruckDataToUse) => {
    const {
      id,
      tankStop,
      fuelLevel,
      checkEngineLight,
    } = companyTruckDataToUse;

    return {
      id,
      tankStop,
      fuelLevel,
      checkEngineLight,
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
