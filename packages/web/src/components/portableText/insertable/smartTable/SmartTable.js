/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
// Basic Table is as per its name a very basic table.
// Do not use this table to implement user interactive elements such as filter and sorting
// It will not work as currently the key for each cell is generated in part by index of the cell in the array and
// not a true unique ID. Once we start to dynamically change the array. This will fail.

import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContent from '../../serializer/TableSerializer';
import SplitCell from './SplitCell';
import Illustration from '../Illustration';
import Video from '../Video';
import ClickableImage from '../ClickableImage';
import ConditionalButton from '../../../buttons/ConditionalButton';
import TableSmartOrderedList from '../TableSmartOrderedList';
import TableSmartUnorderedList from '../TableSmartUnorderedList';

const stickyCellStyle = {
  bgcolor: 'background.paper',
  left: 0,
  position: 'sticky',
  zIndex: 1,
  borderRight: '1px solid rgba(229, 228, 232, 1)',
};

const colHeadStyle = {
  verticalAlign: 'bottom',
  fontWeight: 'medium',
  '& .pt-heading': { fontWeight: 'medium' },
};

const rowHeadStyle = {
  fontWeight: 'medium',
  '& .pt-heading': { fontWeight: 'medium' },
};

const splitStyle = {
  background:
    'linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 1px), rgba(224, 224, 224, 1) 50%, rgba(0,0,0,0) calc(50% + 1px), rgba(0,0,0,0) 100%)',
};

const componentMapping = {
  emptyCell: () => null,
  tablePtCell: TableContent,
  splitCell: SplitCell,
  illustration: Illustration,
  video: Video,
  clickableImage: ClickableImage,
  btnBlockMui: ConditionalButton,
  smartOrderedList: TableSmartOrderedList,
  smartUnorderedList: TableSmartUnorderedList,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'splitCell':
      return { rowHead: props.splitRowHead, colHead: props.splitColHead };
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
                let Component = componentMapping[cell._type];
                const values = propsMapping(cell._type, cell);

                let style;

                if (fixedFirstColumn && index === 0) {
                  if (cell._type === 'splitCell') {
                    style = { ...splitStyle, ...stickyCellStyle, ...colHeadStyle };
                  } else {
                    style = { ...stickyCellStyle, ...colHeadStyle };
                  }
                } else if (index === 0) {
                  if (cell._type === 'splitCell') {
                    style = { ...splitStyle, ...colHeadStyle };
                  }
                } else {
                  style = { ...colHeadStyle };
                }

                let errorMessage = 'Undeveloped Cell Type';

                if (
                  (cell._type === 'emptyCell' && !rowHeading) ||
                  (cell._type === 'emptyCell' && index !== 0)
                ) {
                  Component = null;
                  errorMessage = 'Incorrect usage of empty cell';
                }

                if (
                  (cell._type === 'splitCell' && !rowHeading) ||
                  (cell._type === 'splitCell' && index !== 0)
                ) {
                  Component = null;
                  errorMessage = 'Incorrect usage of split cell';
                }

                return (
                  <TableCell
                    key={`${thead._key}-${index}`}
                    sx={style}
                    scope="col"
                    role={cell._type === 'emptyCell' ? 'cell' : 'columnheader'}
                  >
                    {Component ? <Component {...values} /> : errorMessage}
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
                let Component = componentMapping[cell._type];
                const values = propsMapping(cell._type, cell);

                let style;

                if (rowHeading && index === 0) {
                  if (fixedFirstColumn) {
                    style = { ...stickyCellStyle, ...rowHeadStyle };
                  } else {
                    style = colHeadStyle;
                  }
                } else if (fixedFirstColumn && index === 0) {
                  style = stickyCellStyle;
                }

                let errorMessage = 'Undeveloped Cell Type';

                if (cell._type === 'emptyCell') {
                  Component = null;
                  errorMessage = 'Incorrect usage of empty cell';
                }

                if (cell._type === 'splitCell') {
                  Component = null;
                  errorMessage = 'Incorrect usage of split cell';
                }

                return (
                  <TableCell
                    key={`${thead._key}-${index}`}
                    sx={style}
                    component={rowHeading && index === 0 ? 'th' : 'td'}
                    scope={rowHeading && index === 0 && 'row'}
                    role={rowHeading && index === 0 ? 'rowheader' : 'cell'}
                  >
                    {Component ? <Component {...values} /> : errorMessage}
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
