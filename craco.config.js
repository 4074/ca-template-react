/* eslint-disable @typescript-eslint/no-require-imports */
const CracoLessPlugin = require('craco-less')
const theme = require('./antd.theme')

module.exports = {
  eslint: {
    enable: false,
  },
  typescript: {
    enableTypeChecking: false
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ]
}
