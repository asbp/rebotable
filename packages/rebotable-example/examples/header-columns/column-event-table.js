/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerEvents: {
    onClick: (e, column, columnIndex) => alert(`Click on Product ID header column, columnIndex: ${columnIndex}`)
  }
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerEvents: {
    onClick: (e, column, columnIndex) => alert('Click on Product ID header column')
  }
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } />
`;

export default () => (
  <div>
    <h3>Try to Click on Product ID header column</h3>
    <BootstrapTable keyField="id" data={ products } columns={ columns } />
    <Code>{ sourceCode }</Code>
  </div>
);
