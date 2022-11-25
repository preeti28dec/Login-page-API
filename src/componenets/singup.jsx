import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const navigate = useNavigate();
  function onSignUp() {
    const obj = {
      name: name,
      email: email,
      password: password,
    };
    if (name && email && password === conformPassword) {
      localStorage.setItem("userRegister", JSON.stringify(obj));
      return navigate("/");
    } else {
      return navigate("/signup");
    }
  }

  return (
    <>
      <div className="text-center mt-10">
        <div> Name</div>
        <input
          className="border border-slate-300"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
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
        <div>Conform Pssword</div>
        <input
          className="border border-slate-300"
          type="password"
          onChange={(e) => setConformPassword(e.target.value)}
        />
        <div className="mt-6">
          <button className=" button" onClick={onSignUp}>
            Ragister
          </button>
        </div>
        <div className="mt-6 ">
          <a className="text-blue-500 hover:underline ml-6" href="/login">
            Login page
          </a>
        </div>
      </div>
    </>
  );
};

export default Signup;
