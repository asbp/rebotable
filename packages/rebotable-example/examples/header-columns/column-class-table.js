/* eslint no-unused-vars: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  headerClasses: 'demo-row-odd'
}, {
  dataField: 'price',
  text: 'Product Price',
  headerClasses: (column, colIndex) => {
    if (colIndex % 2 === 0) return 'demo-row-even';
    return 'demo-row-odd';
  }
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  headerClasses: 'demo-row-odd'
}, {
  dataField: 'price',
  text: 'Product Price',
  headerClasses: (column, colIndex) => {
    if (colIndex % 2 === 0) return 'demo-row-even';
    return 'demo-row-odd';
  }
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } />
`;

export default () => (
  <div>
    <BootstrapTable keyField="id" data={ products } columns={ columns } />
    <Code>{ sourceCode }</Code>
  </div>
);
