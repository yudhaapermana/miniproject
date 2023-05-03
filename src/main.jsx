import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './templates/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import 'bootstrap/dist/js/bootstrap'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>    
        <Layout />
      </BrowserRouter>
    </React.StrictMode>,
)
