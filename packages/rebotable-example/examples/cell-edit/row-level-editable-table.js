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
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import cellEditFactory from 'rebotable-editor';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
  cellEdit={ cellEditFactory({
    mode: 'click',
    blurToSave: true,
    nonEditableRows: () => [0, 3]
  }) }
/>
`;
export default () => (
  <div>
    <h3>Product ID: 0, 3 is non editable</h3>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true,
        nonEditableRows: () => [0, 3]
      }) }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
