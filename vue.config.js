const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
    .rule('test')
    .test('/.scss$/')
    .use('vue-style-loader')
    .loader('sass-loader')
    .end()
    .use('css-loader')
    .loader('sass-loader')
    .end()
}})
