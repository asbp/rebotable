import * as path from 'path';
import umdConfig from './webpack.umd.babel';

module.exports = {
  ...umdConfig,
  entry: {
    'rebotable-editor/dist/rebotable-editor': './packages/rebotable-editor/index.js',
    'rebotable-editor/dist/rebotable-editor.min': './packages/rebotable-editor/index.js'
  },
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name].js',
    library: 'ReactBootstrapTable2Editor',
    libraryTarget: 'umd'
  }
};
