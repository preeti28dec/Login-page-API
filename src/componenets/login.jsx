import { useDispatch} from "react-redux";
import React, {  useState } from "react";
import {onSignup } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function logiData() {
    let data = JSON.parse(localStorage.getItem("userRegister"));
    if (data.email === email && data.password === password) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  }

  return (
    <>
      <div className="text-center mt-10">
        <div> Email</div>
        <input
          className="border border-slate-300"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div> Pssword</div>
        <input
          className="border border-slate-300"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-center ">
          <div className="mt-6">
            <button className=" button" onClick={logiData}>
              Login{" "}
            </button>
          </div>
          <div className="mt-6 ml-4">
            <button
              className=" button"
              onClick={() => {
                dispatch(onSignup());
                navigate("/signup");
              }}
            >
              signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
