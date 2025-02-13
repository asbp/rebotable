/* eslint no-console: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(5, (value, index) => ({
  id: index,
  name: `User Name ${index}`,
  rank: Math.random() < 0.5 ? 'down' : 'up'
}));

function rankFormatter(cell, row, rowIndex, formatExtraData) {
  return (
    <i className={ formatExtraData[cell] } />
  );
}

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'rank',
  text: 'Rank',
  formatter: rankFormatter,
  formatExtraData: {
    up: 'glyphicon glyphicon-chevron-up',
    down: 'glyphicon glyphicon-chevron-down'
  }
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';

function rankFormatter(cell, row, rowIndex, formatExtraData) {
  return (
    <i className={ formatExtraData[cell] } />
  );
}

const columns = [
// omit...
{
  dataField: 'rank',
  text: 'Rank',
  formatter: rankFormatter,
  formatExtraData: {
    up: 'glyphicon glyphicon-chevron-up',
    down: 'glyphicon glyphicon-chevron-down'
}];

<BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
/>
`;

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      bordered={ false }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
