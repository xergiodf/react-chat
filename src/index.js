import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Reset from './components/UI/Reset'

const rootElement = document.getElementById('app')
ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  rootElement
)
