import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Contexts/UserContext.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserContext>
      <App />
    </UserContext>

  </React.StrictMode>,
)
