/* eslint no-unused-vars: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import filterFactory, { textFilter } from 'rebotable-filter';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

function priceFormatter(column, colIndex, { sortElement, filterElement }) {
  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      { filterElement }
      { column.text }
      { sortElement }
    </div>
  );
}

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true,
  filter: textFilter(),
  headerFormatter: priceFormatter
}];

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import filterFactory, { textFilter } from 'rebotable-filter';
// ...
function priceFormatter(column, colIndex, { sortElement, filterElement }) {
  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      { filterElement }
      { column.text }
      { sortElement }
    </div>
  );
}

const columns = [
// omit...
{
  dataField: 'price',
  text: 'Product Price',
  sort: true,
  filter: textFilter(),
  headerFormatter: priceFormatter
}];

<BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
  filter={ filterFactory() }
  defaultSorted={ defaultSorted }
/>
`;

export default class DefaultSortTable extends React.PureComponent {
  render() {
    return (
      <div>
        <BootstrapTable
          keyField="id"
          data={ products }
          columns={ columns }
          filter={ filterFactory() }
          defaultSorted={ defaultSorted }
        />
        <Code>{ sourceCode }</Code>
      </div>
    );
  }
}
