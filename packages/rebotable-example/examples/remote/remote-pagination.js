/* eslint react/no-multi-comp: 0 */
import React from 'react';
import PropTypes from 'prop-types';
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
// ...
const RemotePagination = ({ data, page, sizePerPage, onTableChange, totalSize }) => (
  <div>
    <BootstrapTable
      remote
      keyField="id"
      data={ data }
      columns={ columns }
      pagination={ paginationFactory({ page, sizePerPage, totalSize }) }
      onTableChange={ onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: products.slice(0, 10),
      sizePerPage: 10
    };
  }

  handleTableChange = (type, { page, sizePerPage }) => {
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      this.setState(() => ({
        page,
        data: products.slice(currentIndex, currentIndex + sizePerPage),
        sizePerPage
      }));
    }, 2000);
  }

  render() {
    const { data, sizePerPage, page } = this.state;
    return (
      <RemotePagination
        data={ data }
        page={ page }
        sizePerPage={ sizePerPage }
        totalSize={ products.length }
        onTableChange={ this.handleTableChange }
      />
    );
  }
}
`;

const RemotePagination = ({ data, page, sizePerPage, onTableChange, totalSize }) => (
  <div>
    <BootstrapTable
      remote
      keyField="id"
      data={ data }
      columns={ columns }
      pagination={ paginationFactory({ page, sizePerPage, totalSize }) }
      onTableChange={ onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);

RemotePagination.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalSize: PropTypes.number.isRequired,
  sizePerPage: PropTypes.number.isRequired,
  onTableChange: PropTypes.func.isRequired
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: products.slice(0, 10),
      sizePerPage: 10
    };
  }

  handleTableChange = (type, { page, sizePerPage }) => {
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      this.setState(() => ({
        page,
        data: products.slice(currentIndex, currentIndex + sizePerPage),
        sizePerPage
      }));
    }, 2000);
  }

  render() {
    const { data, sizePerPage, page } = this.state;
    return (
      <RemotePagination
        data={ data }
        page={ page }
        sizePerPage={ sizePerPage }
        totalSize={ products.length }
        onTableChange={ this.handleTableChange }
      />
    );
  }
}

export default Container;
