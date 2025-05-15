import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PaymentsPage } from './features/components/pages/payments.page'
import { ProfilePage } from './features/components/pages/profile.page'
import { LoginPage } from './features/components/pages/login.page'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App/> */}
    {/* <PaymentsPage/> */}
    <LoginPage/>
    {/* <ProfilePage/> */}
  </StrictMode>,
)
