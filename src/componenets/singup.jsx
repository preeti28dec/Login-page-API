import { useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import { check, onLogin } from '../features/userSlice'
import { useNavigate } from "react-router-dom";


const Signup = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSignUp() {
        const obj = {
            name,
            email,
            password,
        }
        let arr1=[]

        if (localStorage.getItem('user')){
            arr1=[...JSON.parse(localStorage.getItem('user'))]
        }
        arr1=[...arr1,obj]

        console.log(arr1);
        
        localStorage.setItem('user',JSON.stringify(arr1))

        return arr1

    }
    
    console.log(onSignUp());
    return (
        <>
            <div className="text-center mt-10">
                <div> Name</div>
                <input className="border border-slate-300" type="text" onChange={(e) => setName(e.target.value)} />
                <div> Email</div>
                <input className="border border-slate-300" type="text" onChange={(e) => setEmail(e.target.value)} />
                <div> Pssword</div>
                <input className="border border-slate-300" type="password" onChange={(e) => setPassword(e.target.value)} />
                <div>Conform Pssword</div>
                <input className="border border-slate-300" type="password" onChange={(e) => setPassword(e.target.value)} />
                <div className="mt-6">
                    <button className=" button" onClick={onSignUp} >Ragister </button>
                </div>
                <div className="mt-6 ">Go To Login Page <a className="text-blue-500 hover:underline ml-6" href="/login">Login page</a></div>
            </div>
        </>
    )
}

export default Signup
