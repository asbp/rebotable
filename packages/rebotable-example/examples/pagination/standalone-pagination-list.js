/* eslint react/prefer-stateless-function: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'rebotable-paginator';
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
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'rebotable-paginator';

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
  custom: true,
  totalSize: products.length
};

<PaginationProvider
  pagination={ paginationFactory(options) }
>
  {
    ({
      paginationProps,
      paginationTableProps
    }) => (
      <div>
        <PaginationListStandalone
          { ...paginationProps }
        />
        <BootstrapTable
          keyField="id"
          data={ products }
          columns={ columns }
          { ...paginationTableProps }
        />
      </div>
    )
  }
</PaginationProvider>
`;

const options = {
  custom: true,
  totalSize: products.length
};
// const pagination = paginationFactory(options);

export default class StandalonePaginationList extends React.Component {
  render() {
    return (
      <div>
        <PaginationProvider
          pagination={ paginationFactory(options) }
        >
          {
            ({
              paginationProps,
              paginationTableProps
            }) => (
              <div>
                <PaginationListStandalone
                  { ...paginationProps }
                />
                <BootstrapTable
                  keyField="id"
                  data={ products }
                  columns={ columns }
                  { ...paginationTableProps }
                />
              </div>
            )
          }
        </PaginationProvider>
        <Code>{ sourceCode }</Code>
      </div>
    );
  }
}
