import React from 'react'
import ReactDOM from 'react-dom'

import ReduxProvider from './ReduxProvider'
import App from './App'

const $root = document.getElementById('root')

function render(Component: () => React.ReactElement) {
  ReactDOM.render(
    <ReduxProvider>
      <Component />
    </ReduxProvider>,
    $root
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const NextApp = require('./App').default
    render(NextApp)
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
