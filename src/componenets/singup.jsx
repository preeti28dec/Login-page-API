import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { onLogin } from '../features/userSlice'
import { useNavigate } from "react-router-dom";

const SingUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    let navigate = useNavigate();

    function res() {
        const obj = {
            name,
            email,
            password
        }
        let arr1 = [];

        if (localStorage.getItem('AllUserData')) {

            arr1 = [...JSON.parse(localStorage.getItem('AllUserData'))]
        }
        arr1 = [...arr1, obj];
        localStorage.setItem('AllUserData', JSON.stringify(arr1))

        // localStorage.removeItem("AllUserData")

        return arr1
    }
    console.log(res());
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
                    {name && email && password ?
                        <button className=" button" onClick={() => { dispatch(onLogin()); navigate("/") }} >Ragister </button>
                        :
                        <button className=" button" onClick={() => { dispatch(onLogin()); navigate("/singin") }} >Ragister </button>
                    }
                </div>
                <div className="mt-6 ">Go To Login Page <a className="text-blue-500 hover:underline ml-6" href="/login">Login page</a></div>
            </div>
        </>
    )
}

export default SingUp
