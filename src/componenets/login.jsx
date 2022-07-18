import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { onLogin, onSingUp } from '../features/userSlice'
import { useNavigate } from "react-router-dom";


function Login() {
    // const demo = useSelector((state) => state.user)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, "DFg", password, "sdfgvjdkd")


    return (
        <>
            <div className="text-center mt-10">
                <div> Email</div>
                <input className="border border-slate-300" type="text" onChange={(e) => setEmail(e.target.value)} />
                <div> Pssword</div>
                <input className="border border-slate-300" type="password" onChange={(e) => setPassword(e.target.value)} />
                <div className="flex justify-center ">
                    <div className="mt-6">
                        {email && password ? <button className=" button" onClick={() => {
                            dispatch(onLogin())
                            navigate("/")
                        }} >Login </button>
                            : <button className=" button" onClick={() => {
                                dispatch(onLogin())
                                navigate("/login")
                            }} >
                                Login
                            </button>}

                    </div>
                    <div className="mt-6 ml-4">
                        <button className=" button" onClick={() => {
                            dispatch(onSingUp())
                            navigate("/singin")
                        }} >
                            SingUp
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
