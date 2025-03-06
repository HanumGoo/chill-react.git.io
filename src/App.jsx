import LoginForm from './form-login/loginForm.jsx'
import RegisterForm from './form-register/loginForm.jsx'
import LobbyForm from './lobby/LobbyForm.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to='/login' />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/Lobby' element={<LobbyForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
