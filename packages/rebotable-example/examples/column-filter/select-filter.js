import React from 'react';
import BootstrapTable from 'rebotable';
import filterFactory, { selectFilter } from 'rebotable-filter';
import Code from 'components/common/code-block';
import { productsQualityGenerator } from 'utils/common';

const products = productsQualityGenerator(6);

const selectOptions = {
  0: 'good',
  1: 'Bad',
  2: 'unknown'
};

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'quality',
  text: 'Product Quailty',
  formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions
  })
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import filterFactory, { selectFilter } from 'rebotable-filter';

const selectOptions = {
  0: 'good',
  1: 'Bad',
  2: 'unknown'
};

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'quality',
  text: 'Product Quailty',
  formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions
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