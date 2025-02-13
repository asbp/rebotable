import React from 'react';
import BootstrapTable from 'rebotable';
import filterFactory, { textFilter } from 'rebotable-filter';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(8);

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  footer: 'hello'
}, {
  dataField: 'name',
  text: 'Product Name',
  footer: 'hello',
  filter: textFilter({
    id: 'identify'
  })
}, {
  dataField: 'price',
  text: 'Product Price',
  footer: 'hello',
  filter: textFilter()
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import filterFactory, { textFilter } from 'rebotable-filter';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter()
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter()
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />
`;

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true
};

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      filter={ filterFactory() }
      selectRow={ selectRow }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
