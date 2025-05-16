import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PaymentsPage } from './features/components/pages/payments.page'
import { ProfilePage } from './features/components/pages/profile.page'
import { LoginPage } from './features/components/pages/login.page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ComponentTestPage } from './features/components/pages/componentTest.page'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/component-test" element={<ComponentTestPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
