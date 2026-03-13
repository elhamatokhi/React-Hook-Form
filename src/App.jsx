
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Dashboard from './pages/Dashboard'
import { Routes , Route} from 'react-router-dom';


function App() {

  return (
   <Routes>
    <Route path='/' element={<LoginForm />}/>
    <Route path='/register' element={<RegisterForm />} />
    <Route path='/dashboard' element={<Dashboard />} />
   </Routes>
  )
}

export default App
