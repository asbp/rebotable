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
  editable: false
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
  // Product Name column can't be edit anymore
  editable: false
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
    blurToSave: true
  }) }
/>
`;

export default () => (
  <div>
    <h3>Product Name is non editable</h3>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true
      }) }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
