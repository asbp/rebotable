/* eslint no-unused-vars: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerTitle: true
}, {
  dataField: 'name',
  text: 'Product Name',
  headerTitle: (column, colIndex) => `this is custom title for ${column.text}`
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerTitle: true
}, {
  dataField: 'name',
  text: 'Product Name',
  headerTitle: (column, colIndex) => \`this is custom title for \${column.text}\`
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } />
`;

export default () => (
  <div>
    <BootstrapTable keyField="id" data={ products } columns={ columns } />
    <Code>{ sourceCode }</Code>
  </div>
);
