/* eslint no-unused-vars: 0 */
import React from 'react';
import BootstrapTable from 'rebotable';
import cellEditFactory from 'rebotable-editor';
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
  text: 'Product Price',
  validator: (newValue, row, column, done) => {
    setTimeout(() => {
      if (isNaN(newValue)) {
        return done({
          valid: false,
          message: 'Price should be numeric'
        });
      }
      if (newValue < 2000) {
        return done({
          valid: false,
          message: 'Price should bigger than 2000'
        });
      }
      return done();
    }, 2000);
    return {
      async: true
    };
  }
}];

const sourceCode = `\
import BootstrapTable from 'rebotable';
import cellEditFactory from 'rebotable-editor';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price',
  validator: (newValue, row, column, done) => {
    setTimeout(() => {
      if (isNaN(newValue)) {
        return done({
          valid: false,
          message: 'Price should be numeric'
        });
      }
      if (newValue < 2000) {
        return done({
          valid: false,
          message: 'Price should bigger than 2000'
        });
      }
      return done();
    }, 2000);
    return {
      async: true
    };
  }
}];

<BootstrapTable
  keyField="id"
  data={ products }
  columns={ columns }
  cellEdit={ cellEditFactory({
    mode: 'click',
    blurToSave: true
  }) }
/>
`;

export default () => (
  <div>
    <h3>Product Price should bigger than $2000</h3>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      cellEdit={ cellEditFactory({
        mode: 'click',
        blurToSave: true
      }) }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
