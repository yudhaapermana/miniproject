import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './api/apollo-client'
import Layout from './templates/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import 'bootstrap/dist/js/bootstrap'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>    
        <Layout />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
)
