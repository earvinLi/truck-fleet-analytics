/* eslint-disable react/prop-types */
// External Dependencies
import React, { useState, useEffect } from 'react';

// Material-UI Dependencies
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// Internal Dependencies
import DataTableToolbar from './DataTableToolbar';
import DataTableHead from './DataTableHead';
import DataTableFooter from './DataTableFooter';

// Component Definition
const DataTable = (props) => {
  const {
    tableHeadData,
    tableBodyData,
  } = props;

  const [tableBodyDataToUse, setTableBodyDataToUse] = useState(tableBodyData);
  // TODO: Find a better solution for exchanging data between DataTable and DataTableHead
  useEffect(() => setTableBodyDataToUse(tableBodyData), [tableBodyData]);

  const tableBodyRows = tableBodyDataToUse.map((tableBodyDataPerRow) => {
    const tableBodyRowCells = Object.keys(tableBodyDataPerRow).map((tableBodyKey) => (
      <TableCell key={tableBodyKey}>{tableBodyDataPerRow[tableBodyKey]}</TableCell>
    ));

    return <TableRow key={tableBodyDataPerRow.id}>{tableBodyRowCells}</TableRow>;
  });

  return (
    <TableContainer component={Paper}>
      <DataTableToolbar />
      <Table>
        <DataTableHead
          tableHeadData={tableHeadData}
          tableBodyDataToUse={tableBodyDataToUse}
          setTableBodyDataToUse={setTableBodyDataToUse}
        />
        <TableBody>
          {tableBodyRows}
        </TableBody>
        <DataTableFooter
          itemCount={tableBodyRows.length}
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        />
      </Table>
    </TableContainer>
  );
};

export default DataTable;
