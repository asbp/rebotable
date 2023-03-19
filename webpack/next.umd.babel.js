import * as path from 'path';
import umdConfig from './webpack.umd.babel';

module.exports = {
  ...umdConfig,
  entry: {
    'rebotable/dist/rebotable': './packages/rebotable/index.js',
    'rebotable/dist/rebotable.min': './packages/rebotable/index.js'
  },
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name].js',
    library: 'ReactBootstrapTable2',
    libraryTarget: 'umd'
  }
};
