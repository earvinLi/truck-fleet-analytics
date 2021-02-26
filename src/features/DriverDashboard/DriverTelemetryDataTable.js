// External Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Material-UI Dependencies
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

const DriverTelemetryDataTable = () => {
  const {
    telemetryData: driverTelemetryData,
  } = useSelector((state) => state.driverDashboard);

  const tableHeadCells = [
    'Origin',
    'Destination',
    'Speed',
    'Drive Duration',
    'Fuel Consumption',
    'Fuel Used',
  ].map((headText) => <TableCell>{headText}</TableCell>);

  const tableBodyRows = driverTelemetryData.map((driverTelemetryDataToUse) => {
    const {
      id,
      origin,
      destination,
      speed,
      driveDuration,
      fuelConsumption,
      fuelUsed,
    } = driverTelemetryDataToUse;

    return (
      <TableRow key={`${id}-${origin}-${destination}`}>
        <TableCell>{origin}</TableCell>
        <TableCell>{destination}</TableCell>
        <TableCell>{speed}</TableCell>
        <TableCell>{driveDuration}</TableCell>
        <TableCell>{fuelConsumption}</TableCell>
        <TableCell>{fuelUsed}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeadCells}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DriverTelemetryDataTable;
