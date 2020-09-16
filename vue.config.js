module.exports = {
  devServer: {
    host: "0.0.0.0",
    hot: true,
    disableHostCheck: true
  },
  chainWebpack: (config) => {
    config.module.rule("eslint").use("eslint-loader").options({ fix:true })
  }
}