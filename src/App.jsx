import { useState } from 'react'
import './App.css'
import RegisterForm from './components/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RegisterForm></RegisterForm>
    </div>
  )
}

export default App
