import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
function HomePage() {
  var [date, setDate] = useState(new Date());


  useEffect(() => {
    setInterval(() => setDate(new Date()), 3000)
  }, []);




  return (
    <>
    <div className='font-bold text-3xl'>Dashboard Page</div>
      <div className='maine_login_page'>
        <div className='flex  justify-center '>
          <div className='taxt-lg font-medium m-2 '>Last Login</div>
          <div className='taxt-lg font-medium  m-1 p-2 border border-gray-200'> Time :
            {date.toLocaleTimeString('en-GB', {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
          <div className='taxt-lg font-medium  m-1 p-2 border border-gray-200 '> Date : {date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}</div>
        </div>
      </div>
      <div className='text-center logout_button'>
        <NavLink className='button' to='/login'>
        
          Log out
        </NavLink>
      </div>
    </>
  )
}

export default HomePage
