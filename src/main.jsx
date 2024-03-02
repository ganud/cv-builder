import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/style.css'
//sidebar contains builder inputs, which get mirrored on the CV display
// builder inputs are largely similar, fields may vary
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
