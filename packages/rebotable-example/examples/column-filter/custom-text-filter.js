/* eslint no-console: 0 */
import React from 'react';
import BootstrapTable from 'rebotable';
import filterFactory, { textFilter } from 'rebotable-filter';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(8);

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter()
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter({
    delay: 1000, // default is 500ms
    style: {
      backgroundColor: 'yellow'
    },
    className: 'test-classname',
    placeholder: 'Custom PlaceHolder',
    onClick: e => console.log(e)
  })
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import filterFactory, { textFilter } from 'rebotable-filter';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter()
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter({
    delay: 1000, // default is 500ms
    style: {
      backgroundColor: 'yellow'
    },
    className: 'test-classname',
    placeholder: 'Custom PlaceHolder',
    onClick: e => console.log(e)
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
