/* eslint no-unused-vars: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerAttrs: { title: 'ID header column' }
}, {
  dataField: 'name',
  text: 'Product Name',
  headerAttrs: (column, colIndex) => ({ 'data-test': `customized data ${colIndex}` })
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerAttrs: { title: 'ID header column' }
}, {
  dataField: 'name',
  text: 'Product Name',
  headerAttrs: (column, colIndex) => ({ 'data-test': \`customized data \${colIndex}\` })
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
