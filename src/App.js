import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import Login from './componenets/login'
import HomePage from './componenets/Home_page'
import './App.css'
import SingUp from './componenets/singup';

function App() {

  const { authenticated } = useSelector((state) => state.user)
  
  // let  userid = localStorage.getItem("token") == null ? false : true;

  console.log("DDDD", authenticated)

  return (
    <Router>
      <main className='container content'>
        <Routes>
        {/* {authenticated ? <HomePage  /> : <Navigate to="/login" />}; */}
          <Route path='/' element={<HomePage />} /> :
          <Route path='/login' element={<Login />} />

          {!authenticated && <Route path="*" element={<Navigate to="/login" replace />} />}
          <Route path='singin' element={<SingUp/>}/>

        </Routes>
      </main>
    </Router>
  )
}

export default App
