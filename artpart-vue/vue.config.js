const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../../artpart-boot/artpart/src/main/resources/static/",

  devServer: {
    proxy: {
      '/' : {
        target: 'http://localhost:8887',
        changeOrigin: true
      }
    }
  }
})
