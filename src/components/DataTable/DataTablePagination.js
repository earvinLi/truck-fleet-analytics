/* eslint-disable react/prop-types */
// External Dependencies
import React from 'react';

// Material-UI Dependencies
import TablePagination from '@material-ui/core/TablePagination';

// Component Definition
const DataTableFooter = (props) => {
  const {
    itemCount,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
    rowsPerPage,
    setRowsPerPage,
  } = props;

  const handleSetCurrentPage = (event, newPage) => setCurrentPage(newPage);
  const handleSetRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={itemCount}
      page={currentPage}
      rowsPerPageOptions={rowsPerPageOptions}
      rowsPerPage={rowsPerPage}
      onChangePage={handleSetCurrentPage}
      onChangeRowsPerPage={handleSetRowsPerPage}
    />
  );
};

export default DataTableFooter;
