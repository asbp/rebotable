import React from 'react';
import BootstrapTable from 'rebotable';
import filterFactory, { dateFilter } from 'rebotable-filter';
import Code from 'components/common/code-block';
import { stockGenerator } from 'utils/common';

const stocks = stockGenerator(8);

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'inStockDate',
  text: 'InStock Date',
  formatter: cell => cell.toString(),
  filter: dateFilter()
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import filterFactory, { dateFilter } from 'rebotable-filter';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'inStockDate',
  text: 'InStock Date',
  filter: dateFilter()
}];

<BootstrapTable
  keyField="id"
  data={ stocks }
  columns={ columns }
  filter={ filterFactory() }
/>
`;

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ stocks }
      columns={ columns }
      filter={ filterFactory() }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
