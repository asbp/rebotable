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
    onFilter: filterVal => console.log(`Filter Value: ${filterVal}`)
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
    onFilter: filterVal => console.log(\`Filter Value: $\{filterVal}\`)
  })
}];

function afterFilter(newResult, newFilters) {
  console.log(newResult);
  console.log(newFilters);
}

<BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory({ afterFilter }) } />
`;

function afterFilter(newResult, newFilters) {
  console.log(newResult);
  console.log(newFilters);
}

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      filter={ filterFactory({ afterFilter }) }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
