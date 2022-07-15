import { NavLink } from 'react-router-dom'

function Login() {
    // var [lastlogin, setLastLogin] =useState();
  
    return (
        <>
            <div> Email</div>
            <input className="border border-slate-300" type="text"/>
            <div> Pssword</div>
            <input className="border border-slate-300" type="password"  />
            <div className='mt-6'>
                <NavLink className='button' to='/'>
                    Login
                </NavLink>
            </div>
   
        </>
    )
}

export default Login
