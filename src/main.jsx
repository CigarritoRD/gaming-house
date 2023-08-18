
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

)
