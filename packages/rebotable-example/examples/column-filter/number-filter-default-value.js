import React from 'react';
import BootstrapTable from 'rebotable';
import filterFactory, { numberFilter, Comparator } from 'rebotable-filter';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(8);

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: numberFilter({
    defaultValue: { number: 2103, comparator: Comparator.GT }
  })
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import filterFactory, { numberFilter, Comparator } from 'rebotable-filter';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: numberFilter({
    defaultValue: { number: 2103, comparator: Comparator.GT }
  })
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />
`;

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      filter={ filterFactory() }
    />
    <Code>{ sourceCode }</Code>
  </div>
);