/* eslint prefer-template: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import cellEditFactory, { Type } from 'rebotable-editor';
import Code from 'components/common/code-block';
import { stockGenerator } from 'utils/common';

const stocks = stockGenerator();

const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'name',
  text: 'Name'
}, {
  dataField: 'inStockDate',
  text: 'Stock Date',
  formatter: (cell) => {
    let dateObj = cell;
    if (typeof cell !== 'object') {
      dateObj = new Date(cell);
    }
    return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
  },
  editor: {
    type: Type.DATE
  }
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import cellEditFactory, { Type } from 'rebotable-editor';

const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'name',
  text: 'Name'
}, {
  dataField: 'inStockDate',
  text: 'Stock Date',
  formatter: (cell) => {
    let dateObj = cell;
    if (typeof cell !== 'object') {
      dateObj = new Date(cell);
    }
    return \`$\{('0' + dateObj.getUTCDate()).slice(-2)}/$\{('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/$\{dateObj.getUTCFullYear()}\`;
  },
  editor: {
    type: Type.DATE
  }
}];

<BootstrapTable
  keyField="id"
  data={ stocks }
  columns={ columns }
  cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true }) }
/>
`;

export default () => (
  <div>
    <h3>Date Editor</h3>
    <BootstrapTable
      keyField="id"
      data={ stocks }
      columns={ columns }
      cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true }) }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
