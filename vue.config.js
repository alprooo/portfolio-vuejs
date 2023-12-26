const { defineConfig } = require("@vue/cli-service");
module.exports = {
  outputDir: 'dist',  // Set the output directory to 'dist'
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio-vuejs/' : '/',
  transpileDependencies: true,
};

