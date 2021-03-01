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
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

// Internal Dependencies
import DataTableHead from './DataTableHead';

// Component Definition
const DataTable = (props) => {
  const {
    tableHeadData,
    tableBodyData,
  } = props;

  const [tableBodyDataToUse, setTableBodyDataToUse] = useState(tableBodyData);
  useEffect(() => {
    setTableBodyDataToUse(tableBodyData);
  }, [tableBodyData]);

  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const tableBodyRows = tableBodyDataToUse.map((tableBodyDataPerRow) => {
    const tableBodyRowCells = Object.keys(tableBodyDataPerRow).map((tableBodyKey) => (
      <TableCell key={tableBodyKey}>{tableBodyDataPerRow[tableBodyKey]}</TableCell>
    ));

    return <TableRow key={tableBodyDataPerRow.id}>{tableBodyRowCells}</TableRow>;
  });

  const handleSetCurrentPage = (newPage) => setCurrentPage(newPage);
  const handleSetRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <DataTableHead
          tableHeadData={tableHeadData}
          tableBodyDataToUse={tableBodyDataToUse}
          setTableBodyDataToUse={setTableBodyDataToUse}
        />
        <TableBody>
          {tableBodyRows}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={tableBodyRows.length}
              page={currentPage}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              rowsPerPage={rowsPerPage}
              onChangePage={handleSetCurrentPage}
              onChangeRowsPerPage={handleSetRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
