import * as path from 'path';
import umdConfig from './webpack.umd.babel';

module.exports = {
  ...umdConfig,
  entry: {
    'rebotable-filter/dist/rebotable-filter': './packages/rebotable-filter/index.js',
    'rebotable-filter/dist/rebotable-filter.min': './packages/rebotable-filter/index.js'
  },
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name].js',
    library: 'ReactBootstrapTable2Filter',
    libraryTarget: 'umd'
  }
};
