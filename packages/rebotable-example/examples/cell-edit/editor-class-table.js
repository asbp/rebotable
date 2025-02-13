/* eslint no-unused-vars: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import cellEditFactory from 'rebotable-editor';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  editorClasses: 'editing-name'
}, {
  dataField: 'price',
  text: 'Product Price',
  editorClasses: (cell, row, rowIndex, colIndex) =>
    (cell > 2101 ? 'editing-price-bigger-than-2101' : 'editing-price-small-than-2101')
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import cellEditFactory from 'rebotable-editor';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  editorClasses: 'editing-name'
}, {
  dataField: 'price',
  text: 'Product Price',
  editorClasses: (cell, row, rowIndex, colIndex) =>
    (cell > 2101 ? 'editing-price-bigger-than-2101' : 'editing-price-small-than-2101')
}];

<BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
  cellEdit={ cellEditFactory({ mode: 'click' }) }
/>
`;

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      cellEdit={ cellEditFactory({ mode: 'click' }) }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
