/* eslint-disable react/prop-types */
// External Dependencies
import React, { useState } from 'react';

// Material-UI Dependencies
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

// Component Definition
const DataTable = (props) => {
  const {
    itemCount,
    rowsPerPageOptions,
  } = props;

  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSetCurrentPage = (newPage) => setCurrentPage(newPage);
  const handleSetRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          count={itemCount}
          page={currentPage}
          rowsPerPageOptions={rowsPerPageOptions}
          rowsPerPage={rowsPerPage}
          onChangePage={handleSetCurrentPage}
          onChangeRowsPerPage={handleSetRowsPerPage}
        />
      </TableRow>
    </TableFooter>
  );
};

export default DataTable;
