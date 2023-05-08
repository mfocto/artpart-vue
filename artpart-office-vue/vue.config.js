const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'../../artpart-boot/artpartM/src/main/resources/static',

  devServer: {
    proxy: {
      '/' : {
        target: 'http://localhost:8282',
        changeOrigin: true,
        ws: false,
      }
    }
  }
})
