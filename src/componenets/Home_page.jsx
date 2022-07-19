import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { onLogout,onLogin } from '../features/userSlice'
import { useNavigate } from "react-router-dom";

function HomePage() {
  var [date] = useState(new Date());
  
  const dispatch = useDispatch()
  let navigate = useNavigate();
  

  return (
    <>
      <div className='font-bold text-3xl'>Dashboard Page</div>
      <div className='maine_login_page'>
        <div className='flex  justify-center '>
          <div className='taxt-lg font-medium m-2 '>Last Login</div>
          <div className='taxt-lg font-medium  m-1 p-2 border border-gray-200'> Time :
            { date.toLocaleTimeString('en-GB', {  hour: "numeric",  minute: "numeric",  hour12: true,  })}
          </div>
          <div className='taxt-lg font-medium  m-1 p-2 border border-gray-200 '> Date :
            { date.toLocaleDateString('en-US', { day: 'numeric', month: 'short',  year: 'numeric' })}
          </div>
        </div>
      </div>
      <div className='text-center logout_button'>
        <button className=" button" onClick={() => { dispatch(onLogout()); navigate("/login") }} >
          Logout
        </button>
      </div>
    </>
  )
}

export default HomePage
