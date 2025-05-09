
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoginForm } from './features/auth/components/LoginForm'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  </React.StrictMode>,
)
