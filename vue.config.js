/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
==========================================================================================*/

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  configureWebpack : {
    performance: {
      hints:'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));
  },
  devServer: {
    // host: "localhost",
    /* 本地ip地址 */
    // host: "192.168.1.107",
    host: '0.0.0.0', // 局域网和本地访问
    port: '8080',
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true
    },
    /* 跨域代理 */
    proxy: {
      /* 用户模块代理 */
      '/api-user': {
        /* 目标代理服务器地址 */
        target: 'http://localhost:9005/',
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api-user': ''
        }
      },
      '/api-edu': {
        /* 目标代理服务器地址 */
        target: 'http://localhost:9006/',
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api-edu': ''
        }
      }
    }
  }
}


