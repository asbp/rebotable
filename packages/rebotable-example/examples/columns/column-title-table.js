/* eslint no-unused-vars: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  title: true
}, {
  dataField: 'name',
  text: 'Product Name',
  title: (cell, row, rowIndex, colIndex) => `this is custom title for ${cell}`
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  title: true
}, {
  dataField: 'name',
  text: 'Product Name',
  title: (cell, row, rowIndex, colIndex) => \`this is custom title for \${cell}\`
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } />
`;

export default () => (
  <div>
    <h3>Try to hover on any Product Name cells</h3>
    <BootstrapTable keyField="id" data={ products } columns={ columns } />
    <Code>{ sourceCode }</Code>
  </div>
);
