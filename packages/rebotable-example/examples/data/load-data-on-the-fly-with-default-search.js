/* eslint react/prop-types: 0 */
import React from 'react';

import BootstrapTable from 'rebotable';
import ToolkitProvider, { Search } from 'rebotable-toolkit';
import { productsGenerator } from 'utils/common';

const { SearchBar } = Search;
const ProductList = (props) => {
  const columns = [
    {
      dataField: 'id',
      text: 'Product ID'
    },
    {
      dataField: 'name',
      text: 'Product Name'
    },
    {
      dataField: 'price',
      text: 'Product Price'
    }
  ];

  return (
    <div style={ { paddingTop: '20px' } }>
      <h1 className="h2">Products</h1>
      <ToolkitProvider
        keyField="id"
        data={ props.products }
        columns={ columns }
        search={ { defaultSearch: '2101' } }
      >
        {
          toolkitprops => (
            <div>
              <SearchBar { ...toolkitprops.searchProps } />
              <BootstrapTable
                striped
                hover
                { ...toolkitprops.baseProps }
              />
            </div>
          )
        }
      </ToolkitProvider>
    </div>
  );
};

export default class DataContainer extends React.Component {
  state = {
    products: productsGenerator(3)
  };

  loadData = () => {
    this.setState({
      products: productsGenerator(14)
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={ this.loadData }
          style={ {
            fontSize: '20px',
            position: 'absolute',
            left: '200px',
            top: '40px'
          } }
        >
          Load Data
        </button>
        <ProductList products={ this.state.products } />
      </div>
    );
  }
}
