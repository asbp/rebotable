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
  editCellStyle: {
    backgroundColor: '#20B2AA'
  }
}, {
  dataField: 'price',
  text: 'Product Price',
  editCellStyle: (cell, row, rowIndex, colIndex) => {
    const backgroundColor = cell > 2101 ? '#00BFFF' : '#00FFFF';
    return { backgroundColor };
  }
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
  editCellStyle: {
    backgroundColor: '#20B2AA'
  }
}, {
  dataField: 'price',
  text: 'Product Price',
  editCellStyle: (cell, row, rowIndex, colIndex) => {
    const backgroundColor = cell > 2101 ? '#00BFFF' : '#00FFFF';
    return { backgroundColor };
  }
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
