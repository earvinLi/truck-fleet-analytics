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
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import DataTableToolbar from './DataTableToolbar';
import DataTableHead from './DataTableHead';
import DataTablePagination from './DataTablePagination';
import getDataTableStyles from './styles/dataTableStyles';

// Component Definition
const DataTable = (props) => {
  const {
    tableTitle,
    tableHeadData,
    tableBodyData,
  } = props;

  const { tableContainerStyle } = makeStyles((theme) => getDataTableStyles(theme))();

  // TODO: Find a better solution for seperating the concern to DataTableFooter
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // TODO: Find a better solution for exchanging data between DataTable and DataTableHead
  const [tableBodyDataToUse, setTableBodyDataToUse] = useState(tableBodyData);
  useEffect(() => setTableBodyDataToUse(tableBodyData), [tableBodyData]);

  const tableBodyRows = tableBodyDataToUse.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage,
  ).map((tableBodyDataPerRow) => {
    const tableBodyRowCells = Object.keys(tableBodyDataPerRow).map((tableBodyKey) => (
      <TableCell key={tableBodyKey}>{tableBodyDataPerRow[tableBodyKey]}</TableCell>
    ));

    return <TableRow key={tableBodyDataPerRow.id}>{tableBodyRowCells}</TableRow>;
  });

  return (
    <Paper>
      <DataTableToolbar tableTitle={tableTitle} />
      <TableContainer className={tableContainerStyle}>
        <Table stickyHeader>
          <DataTableHead
            tableHeadData={tableHeadData}
            tableBodyDataToUse={tableBodyDataToUse}
            setTableBodyDataToUse={setTableBodyDataToUse}
          />
          <TableBody>
            {tableBodyRows}
          </TableBody>
        </Table>
      </TableContainer>
      <DataTablePagination
        itemCount={tableBodyDataToUse.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
