/* eslint react/prefer-stateless-function: 0 */
/* eslint no-console: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import paginationFactory from 'rebotable-paginator';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(87);

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
import paginationFactory from 'rebotable-paginator';

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

const options = {
  onSizePerPageChange: (sizePerPage, page) => {
    console.log('Size per page change!!!');
    console.log('Newest size per page:' + sizePerPage);
    console.log('Newest page:' + page);
  },
  onPageChange: (page, sizePerPage) => {
    console.log('Page change!!!');
    console.log('Newest size per page:' + sizePerPage);
    console.log('Newest page:' + page);
  }
};

<BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
  pagination={ paginationFactory(options) }
/>
`;

const options = {
  onSizePerPageChange: (sizePerPage, page) => {
    console.log('Size per page change!!!');
    console.log(`Newest size per page: ${sizePerPage}`);
    console.log(`Newest page: ${page}`);
  },
  onPageChange: (page, sizePerPage) => {
    console.log('Page change!!!');
    console.log(`Newest size per page: ${sizePerPage}`);
    console.log(`Newest page: ${page}`);
  }
};

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      pagination={ paginationFactory(options) }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
