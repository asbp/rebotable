import * as path from 'path';
import umdConfig from './webpack.umd.babel';

module.exports = {
  ...umdConfig,
  entry: {
    'rebotable-overlay/dist/rebotable-overlay': './packages/rebotable-overlay/index.js',
    'rebotable-overlay/dist/rebotable-overlay.min': './packages/rebotable-overlay/index.js'
  },
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name].js',
    library: 'ReactBootstrapTable2Overlay',
    libraryTarget: 'umd'
  }
};
