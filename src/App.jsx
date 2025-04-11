import LoginForm from './form-login/loginForm.jsx'
import RegisterForm from './form-register/loginForm.jsx'
import LobbyForm from './lobby/LobbyForm.jsx'
import ProfileForm from './lobby/settings.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import GlobalState from './lobby/AccountState'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to='/login' />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />


        <Route path='/lobby/series' element={<GlobalState><LobbyForm /></GlobalState>} />
        <Route path='series' />
        
        <Route path='/lobby/profile' element={<GlobalState><ProfileForm /></GlobalState>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
