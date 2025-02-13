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
  footer: 'Footer 1',
  footerAttrs: { title: 'ID footer column' }
}, {
  dataField: 'name',
  text: 'Product Name',
  footer: 'Footer 2',
  footerAttrs: (column, colIndex) => ({ 'data-test': `customized data ${colIndex}` })
}, {
  dataField: 'price',
  text: 'Product Price',
  footer: 'Footer 3'
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';

const columns = [{
    dataField: 'id',
    text: 'Product ID',
    footer: 'Footer 1',
    footerAttrs: { title: 'ID footer column' }
  }, {
    dataField: 'name',
    text: 'Product Name',
    footer: 'Footer 2',
    footerAttrs: (column, colIndex) => ({ 'data-test': \`customized data \${colIndex}\` })
  }, {
    dataField: 'price',
    text: 'Product Price',
    footer: 'Footer 3'
  }];

<BootstrapTable keyField='id' data={ products } columns={ columns } />
`;

export default () => (
  <div>
    <BootstrapTable keyField="id" data={ products } columns={ columns } />
    <Code>{ sourceCode }</Code>
  </div>
);
