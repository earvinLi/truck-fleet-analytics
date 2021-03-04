/* eslint-disable react/prop-types */
// External Dependencies
import React, { useState } from 'react';

// Material-UI Dependencies
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getDataTableHeadStyles from './styles/dataTableHeadStyles';

// Component Definition
const DataTableHead = (props) => {
  const {
    tableHeadData,
    tableBodyDataToUse,
    setTableBodyDataToUse,
  } = props;

  const {
    headCellStyle,
    activeColumnSpanStyle,
  } = makeStyles((theme) => getDataTableHeadStyles(theme))();

  const [tableDataOrder, setTableDataOrder] = useState('desc');
  const [tableDataOrderBy, setTableDataOrderBy] = useState('id');

  const descendingComparator = (itemA, itemB, orderBy) => {
    if (itemB[orderBy] < itemA[orderBy]) return -1;
    if (itemB[orderBy] > itemA[orderBy]) return 1;
    return 0;
  };

  const getComparator = (order, orderBy) => (order === 'desc'
    ? (itemA, itemB) => descendingComparator(itemA, itemB, orderBy)
    : (itemA, itemB) => -descendingComparator(itemA, itemB, orderBy));

  const stableSort = (array, comparator) => {
    const stabilizedArray = array.map((element, index) => [element, index]);
    stabilizedArray.sort((itemA, itemB) => {
      const order = comparator(itemA[0], itemB[0]);
      if (order !== 0) return order;
      return itemA[1] - itemB[1];
    });
    return stabilizedArray.map((element) => element[0]);
  };

  const handleRequestSort = (property) => () => {
    const isAsc = tableDataOrderBy === property && tableDataOrder === 'asc';
    setTableDataOrder(isAsc ? 'desc' : 'asc');
    setTableDataOrderBy(property);
    setTableBodyDataToUse(stableSort(
      tableBodyDataToUse, getComparator(tableDataOrder, tableDataOrderBy),
    ));
  };

  const tableHeadCells = tableHeadData.map((tableHeadDataToUse) => {
    const {
      id,
      label,
    } = tableHeadDataToUse;
    const isColumnActive = tableDataOrderBy === id;

    return (
      <TableCell
        key={id}
        className={headCellStyle}
        sortDirection={isColumnActive ? tableDataOrder : false}
      >
        <TableSortLabel
          active={isColumnActive}
          direction={isColumnActive ? tableDataOrder : 'asc'}
          onClick={handleRequestSort(id)}
        >
          {isColumnActive ? (
            <span className={activeColumnSpanStyle}>
              {tableDataOrder === 'desc' ? 'sorted descending' : 'sorted ascending'}
            </span>
          ) : null}
          {label}
        </TableSortLabel>
      </TableCell>
    );
  });

  return (
    <TableHead>
      <TableRow>
        {tableHeadCells}
      </TableRow>
    </TableHead>
  );
};

export default DataTableHead;
