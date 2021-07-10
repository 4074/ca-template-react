import { Router, LocationProvider } from '@reach/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import { Layout, Home } from 'pages'

import 'antd/dist/antd.less'
import './styles/main.scss'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <LocationProvider>
        <Layout>
          <Router>
            <Home path="/" />
          </Router>
        </Layout>
      </LocationProvider>
    </ConfigProvider>
  )
}

export default App
