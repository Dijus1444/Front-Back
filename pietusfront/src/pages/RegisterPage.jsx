import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../helpers/userHelpers";

export const RegisterPage = () => {
   const [form, setForm] = useState({name: "", email:"", password: ""});
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

   const navigate = useNavigate();


   const handleChange = (e)=> {
    setForm((prev)=> ({...prev, [e.target.name]: e.target.value}));
   };


   const handleSubmit = async(e)=> {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
        const data = await registerUser(form);
        localStorage.setItem("user", JSON.stringify(data));

        if(data.roll === "admin"){
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
        <h2>REGISTER</h2>

        {error && <p style={{color: "red"}}>{error}</p>}
        {success && <p style={{color: "green"}}>{success}</p>}
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" 
            onChange={handleChange} value={form.name}/>

            <input type="email" name="email" placeholder="Email" 
            onChange={handleChange} value={form.email}/>

            <input type="password" name="password" placeholder="Password"
            onChange={handleChange} value={form.password}/>

            <button type="submit">Register</button>
        </form>
    </div>
   );
};