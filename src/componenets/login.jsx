import { useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import { onLogin, check, onSignup } from '../features/userSlice'
import { useNavigate } from "react-router-dom";
import Signup from "./singup";


function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // const demo = useSelector((state) => state.user)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    function logiData() {

        // let array= JSON.parse('user')
        let arr= localStorage.getItem('user')
        console.log(typeof arr);    
        const obj = {
            email,
            password
        }
        const check = JSON.parse(arr).filter((i)=> obj.email ===i.email && obj.password === i.password)
        console.log(arr,"dghit",check);
        return check
    }

    return (
        <>
            <div className="text-center mt-10">
                <div> Email</div>
                <input className="border border-slate-300" type="text" onChange={(e) => setEmail(e.target.value)} />
                <div> Pssword</div>
                <input className="border border-slate-300" type="password" onChange={(e) => setPassword(e.target.value)} />
                <div className="flex justify-center ">
                    <div className="mt-6">
                         <button className=" button" onClick={logiData}>Login </button>
                    </div>
                    <div className="mt-6 ml-4">
                        <button className=" button" onClick={() => {
                            dispatch(onSignup())
                            navigate('/signup')
                        }} >
                            signup
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
