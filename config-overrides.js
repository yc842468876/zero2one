const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

module.exports = override(
  // antd 按需加载
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 别名配置
  addWebpackAlias({
    '@': path.join(__dirname, './src')
  }),
  //装饰器配置项
  addDecoratorsLegacy()
);