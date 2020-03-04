// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true, //标签间去除空格
    extractCSS: !isDev, //各个页面css单独打包，开发模式用isDev
    cssModules: {},
    hotReload: false, //热重载 根据环境变量生成
    // loaders: { //给自定义模块自定义loader
    //   "docs": docsLoader,
    // }
    // preLoader: {

    // },
    // postLoader: {

    // }
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', //更改css类名
      camelCase: true //生成css唯一对应的名字
    }
  }
}