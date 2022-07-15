import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './componenets/login'
import SingUp from './componenets/singup'
import HomePage from './componenets/Home_page'
import './App.css'

function App() {
  return (
    <Router>
      <main className='container content'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/singup' element={<SingUp/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
