/* eslint react/prop-types: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import ToolkitProvider from 'rebotable-toolkit';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

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
import ToolkitProvider from 'rebotable-toolkit';

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

const MyExportCSV = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ handleClick }>Export to CSV</button>
    </div>
  );
};

<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  exportCSV
>
  {
    props => (
      <div>
        <BootstrapTable { ...props.baseProps } />
        <hr />
        <MyExportCSV { ...props.csvProps } />
      </div>
    )
  }
</ToolkitProvider>
`;

const MyExportCSV = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ handleClick }>Export to CSV</button>
    </div>
  );
};

export default () => (
  <div>
    <ToolkitProvider
      keyField="id"
      data={ products }
      columns={ columns }
      exportCSV
    >
      {
        props => (
          <div>
            <BootstrapTable { ...props.baseProps } />
            <hr />
            <MyExportCSV { ...props.csvProps } />
          </div>
        )
      }
    </ToolkitProvider>
    <Code>{ sourceCode }</Code>
  </div>
);
