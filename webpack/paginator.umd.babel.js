import * as path from 'path';
import umdConfig from './webpack.umd.babel';

module.exports = {
  ...umdConfig,
  entry: {
    'rebotable-paginator/dist/rebotable-paginator': './packages/rebotable-paginator/index.js',
    'rebotable-paginator/dist/rebotable-paginator.min': './packages/rebotable-paginator/index.js'
  },
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name].js',
    library: 'ReactBootstrapTable2Paginator',
    libraryTarget: 'umd'
  }
};
