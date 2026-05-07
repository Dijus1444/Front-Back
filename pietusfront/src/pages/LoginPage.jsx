import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../helpers/userHelpers.js";

export const LoginPage = () => {
   const [form, setForm] = useState({email:"", password: ""});
   const [error, setError] = useState("");

   const navigate = useNavigate();


   const handleChange = (e)=> {
    setForm((prev)=> ({...prev, [e.target.name]: e.target.value}));
   };


   const handleSubmit = async(e)=> {
    e.preventDefault();
    setError("");

    try {
        const data = await loginUser(form);
        localStorage.setItem("user", JSON.stringify(data));

        if(data.role === "admin"){
            navigate("/admindashboard");
        } else {
            navigate("/alldishes");
        }
    } catch (err) {
        setError(err.message);
    }
   };

   return (
    <div>
        <h2>LOGIN</h2>

        {error && <p style={{color: "red"}}>{error}</p>}

        <form onSubmit={handleSubmit}>

            <input type="email" name="email" placeholder="Email" 
            onChange={handleChange} value={form.email}/>

            <input type="password" name="password" placeholder="Password"
            onChange={handleChange} value={form.password}/>

            <button type="submit">Login</button>
        </form>
    </div>
   );
};