/* eslint react/prop-types: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import ToolkitProvider, { Search } from 'rebotable-toolkit';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const { SearchBar } = Search;
const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price',
  formatter: cell => `USD ${cell}`
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import ToolkitProvider, { Search } from 'rebotable-toolkit';

const { SearchBar } = Search;
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price',
  formatter: cell => \`USD \${cell}\`  // we will search the data after formatted
}];

<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search={ { searchFormatted: true } }
>
  {
    props => (
      <div>
        <h3>Try to Search USD at below input field:</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>
`;

export default () => (
  <div>
    <ToolkitProvider
      keyField="id"
      data={ products }
      columns={ columns }
      search={ { searchFormatted: true } }
    >
      {
        props => (
          <div>
            <h3>Try to Search USD at below input field:</h3>
            <SearchBar { ...props.searchProps } />
            <hr />
            <BootstrapTable
              { ...props.baseProps }
            />
          </div>
        )
      }
    </ToolkitProvider>
    <Code>{ sourceCode }</Code>
  </div>
);
