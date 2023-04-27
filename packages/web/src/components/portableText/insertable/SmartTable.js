/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
// Basic Table is as per its name a very basic table.
// Do not use this table to implement user interactive elements such as filter and sorting
// It will not work as currently the key for each cell is generated in part by index of the cell in the array and
// not a true unique ID. Once we start to dynamically change the array. This will fail.

import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableContent from '../serializer/TableSerializer';
import Illustration from './Illustration';
import Video from './Video';
import ClickableImage from './ClickableImage';
import ConditionalButton from '../../buttons/ConditionalButton';
import TableSmartOrderedList from './TableSmartOrderedList';
import TableSmartUnorderedList from './TableSmartUnorderedList';

const StickyTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  left: 0,
  position: 'sticky',
  zIndex: 1,
  borderRight: '1px solid rgba(229, 228, 232, 1)',
  overflow: 'hidden',
}));

const SplitCellError = () => 'Split Cell can only be used in apex position with double headings';

const componentMapping = {
  tablePtCell: TableContent,
  illustration: Illustration,
  video: Video,
  clickableImage: ClickableImage,
  btnBlockMui: ConditionalButton,
  smartOrderedList: TableSmartOrderedList,
  smartUnorderedList: TableSmartUnorderedList,
  splitCell: SplitCellError,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'tablePtCell':
      return { blocks: props.copy };
    case 'illustration':
      return { illustration: props };
    case 'btnBlockMui':
      return { condition: props.link[0]._type, values: props };
    default:
      return props;
  }
};

function SmartTable({ smartTable }) {
  const { colHeading, rowHeading, title, maxWidth, colgroup, fixedFirstColumn } = smartTable;

  let thead = [];
  let tbody = smartTable.rows;

  if (colHeading) {
    thead = smartTable.rows[0]; // eslint-disable-line
    tbody = smartTable.rows.slice(1);
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth }}>
      <Table
        size="small"
        aria-label={title}
        role="table"
        sx={{ tableLayout: 'fixed', borderCollapse: 'separate' }}
      >
        <colgroup>
          {colgroup
            ? colgroup.map((col, index) => (
                <col span="1" width={col.width} key={`colWidth-${index}`} />
              ))
            : [...Array(tbody[0].cells.length)].map((x, index) => (
                <col width="100px" key={`colWidth-${index}`} />
              ))}
        </colgroup>

        {colHeading && (
          <TableHead>
            <TableRow key={thead._key}>
              {thead.cells.map((cell, index) => {
                // check if a !cell is required if we are no longer applying a role?
                if (fixedFirstColumn && index === 0) {
                  if (cell._type === 'emptyCell') {
                    return <StickyTableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  if (cell._type === 'splitCell') {
                    return (
                      <StickyTableCell
                        key={`${thead._key}-${index}`}
                        sx={{
                          overflow: 'hidden',
                          background:
                            'linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 1px), rgba(224, 224, 224, 1) 50%, rgba(0,0,0,0) calc(50% + 1px), rgba(0,0,0,0) 100%)',
                        }}
                        scope="col"
                        role="columnheader"
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                            top: 0,
                            left: 0,
                          }}
                        >
                          <Box
                            sx={{
                              float: 'right',
                              whiteSpace: 'nowrap',
                              fontWeight: 'medium',
                              '& .pt-heading': { fontWeight: 'medium' },
                            }}
                          >
                            {cell.splitColHead}
                          </Box>
                          <br />
                          <Box
                            sx={{
                              whiteSpace: 'nowrap',
                              fontWeight: 'medium',
                              '& .pt-heading': { fontWeight: 'medium' },
                            }}
                          >
                            {cell.splitRowHead}
                          </Box>
                        </Box>
                      </StickyTableCell>
                    );
                  }
                  const Component = componentMapping[cell._type];
                  const values = propsMapping(cell._type, cell);
                  return (
                    // eslint-disable-next-line
                  <StickyTableCell key={`${thead._key}-${index}`} sx={{overflow: 'hidden', fontWeight: 'medium', '& .pt-heading': { fontWeight: 'medium' }}} scope="col" role="columnheader">
                      <Component {...values} />
                    </StickyTableCell>
                  );
                }
                if (cell._type === 'emptyCell') {
                  return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                }
                if (cell._type === 'splitCell') {
                  return (
                    <TableCell
                      key={`${thead._key}-${index}`}
                      sx={{
                        overflow: 'hidden',
                        background:
                          'linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 1px), rgba(224, 224, 224, 1) 50%, rgba(0,0,0,0) calc(50% + 1px), rgba(0,0,0,0) 100%)',
                      }}
                      scope="col"
                      role="columnheader"
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: '100%',
                          width: '100%',
                          top: 0,
                          left: 0,
                        }}
                      >
                        <Box
                          sx={{
                            float: 'right',
                            whiteSpace: 'nowrap',
                            fontWeight: 'medium',
                            '& .pt-heading': { fontWeight: 'medium' },
                          }}
                        >
                          {cell.splitColHead}
                        </Box>
                        <br />
                        <Box
                          sx={{
                            whiteSpace: 'nowrap',
                            fontWeight: 'medium',
                            '& .pt-heading': { fontWeight: 'medium' },
                          }}
                        >
                          {cell.splitRowHead}
                        </Box>
                      </Box>
                    </TableCell>
                  );
                }
                const Component = componentMapping[cell._type];
                const values = propsMapping(cell._type, cell);
                return (
                  // eslint-disable-next-line
                <TableCell key={`${thead._key}-${index}`} sx={{overflow: 'hidden', fontWeight: 'medium', '& .pt-heading': { fontWeight: 'medium' }}} scope="col" role="columnheader">
                    <Component {...values} />
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {tbody.map((row) => (
            <TableRow key={row._key} sx={{ verticalAlign: 'top' }}>
              {row.cells.map((cell, index) => {
                const Component = componentMapping[cell._type];
                const values = propsMapping(cell._type, cell);
                if (rowHeading && index === 0) {
                  if (fixedFirstColumn) {
                    if (cell._type === 'emptyCell') {
                      return <StickyTableCell key={`${thead._key}-${index}`} role="cell" />;
                    }
                    return (
                      <StickyTableCell
                        component="th"
                        key={`${row._key}-${index}`}
                        sx={{
                          verticalAlign: 'top',
                          overflow: 'hidden',
                          fontWeight: 'medium',
                          '& .pt-heading': { fontWeight: 'medium' },
                        }}
                        scope="row"
                        role="rowheader"
                      >
                        <Component {...values} />
                      </StickyTableCell>
                    );
                  }
                  if (cell._type === 'emptyCell') {
                    return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  return (
                    <TableCell
                      component="th"
                      key={`${row._key}-${index}`}
                      sx={{
                        verticalAlign: 'top',
                        overflow: 'hidden',
                        fontWeight: 'medium',
                        '& .pt-heading': { fontWeight: 'medium' },
                      }}
                      scope="row"
                      role="rowheader"
                    >
                      <Component {...values} />
                    </TableCell>
                  );
                }
                if (fixedFirstColumn && index === 0) {
                  if (cell._type === 'emptyCell') {
                    return <StickyTableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  return (
                    <StickyTableCell
                      key={`${row._key}-${index}`}
                      sx={{ verticalAlign: 'top', overflow: 'hidden' }}
                      role="cell"
                    >
                      <Component {...values} />
                    </StickyTableCell>
                  );
                }
                if (cell._type === 'emptyCell') {
                  return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                }
                return (
                  <TableCell
                    key={`${row._key}-${index}`}
                    sx={{ verticalAlign: 'top', overflow: 'hidden' }}
                    role="cell"
                  >
                    <Component {...values} />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SmartTable;
