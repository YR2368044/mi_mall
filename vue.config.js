// 该文件是整个 webpack 的配置表，最终传给 node.js 服务器完成设置，
  // 而 node.js 服务器遵循 commonJS 规范，所以导入模块不是 import
  // 而是 module
module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": { // 对 api 的拦截，当访问 api 接口时，代理到指定接口
        target: "https://www.imooc.com",
        changeOrigin: false
      }
    }
  }
}
