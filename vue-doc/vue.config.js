/**
 * 在 vue 中配置 webpack
 */
module.exports = {
  // 修改项目的入口文件, 可以修改 configureWebpack 对象的 entry 属性
  // 可以修改 entry 这个属性来查看对应不同的知识总结
  configureWebpack: {
    // entry: './src/main.js',  // 默认入口 ./src/main.js
    entry: './01.src-插槽/main.js', // 修改入口 ./01.src-插槽/main.js
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
