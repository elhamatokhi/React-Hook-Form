import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {
        showLogin ? (
          <LoginForm onSwitchToRegister={()=>setShowLogin(false)}/> 
        ) : (<RegisterForm onSwitchToLogin={() => setShowLogin(true)} />)
      }
    </div>
  )
}

export default App
