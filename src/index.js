import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Reset from './components/UI/Reset'

const rootElement = document.getElementsByTagName('div')
ReactDOM.render(
  <>
    <Reset />
    <App />
  </>,
  // This is a workaround to work in CodeSandbox
  rootElement[0]
)
