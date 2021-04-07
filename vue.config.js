
module.exports = {
  // 根据不同的执行环境配置不同的入口
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  outputDir: 'dist',
  configureWebpack:{
    entry: './src/index.js',
    output: {
    // 修改打包出口，在最外级目录打包出一个 index.js 文件，我们 import 默认会指向这个文件
    filename: 'dynamic-form.js',
    library: 'dynamic-form', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },

  },

}
