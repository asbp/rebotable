import * as path from 'path';
import umdConfig from './webpack.umd.babel';

module.exports = {
  ...umdConfig,
  entry: {
    'rebotable-toolkit/dist/rebotable-toolkit': './packages/rebotable-toolkit/index.js',
    'rebotable-toolkit/dist/rebotable-toolkit.min': './packages/rebotable-toolkit/index.js'
  },
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name].js',
    library: 'ReactBootstrapTable2Toolkit',
    libraryTarget: 'umd'
  }
};
