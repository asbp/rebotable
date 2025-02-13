/* eslint react/prop-types: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import ToolkitProvider, { CSVExport, Search } from 'rebotable-toolkit';
import filterFactory, { textFilter } from 'rebotable-filter';
import paginationFactory from 'rebotable-paginator';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
const products = productsGenerator(150);

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter()
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import ToolkitProvider, { CSVExport, Search } from 'rebotable-toolkit';
import filterFactory, { textFilter } from 'rebotable-filter';

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

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

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true
};

<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  exportCSV={ { onlyExportFiltered: true, exportAll: false } }
  search
>
  {
    props => (
      <div>
        <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
        <hr />
        <SearchBar { ...props.searchProps } />
        <BootstrapTable
          { ...props.baseProps }
          pagination={ paginationFactory() }
          filter={ filterFactory() }
        />
      </div>
    )
  }
</ToolkitProvider>
`;

export default () => (
  <div>
    <h3>Export all the filtered/searched rows</h3>
    <ToolkitProvider
      keyField="id"
      data={ products }
      columns={ columns }
      exportCSV={ { onlyExportFiltered: true, exportAll: false } }
      search
    >
      {
        props => (
          <div>
            <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
            <hr />
            <SearchBar { ...props.searchProps } />
            <BootstrapTable
              { ...props.baseProps }
              pagination={ paginationFactory() }
              filter={ filterFactory() }
            />
          </div>
        )
      }
    </ToolkitProvider>
    <Code>{ sourceCode }</Code>
  </div>
);
