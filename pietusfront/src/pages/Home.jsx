import React from "react";
import { Link } from "react-router-dom";


export const Home = () => {
    return ( 
    <div>
        <p>Welcome to DIENOS PIETUS</p>

    <div>
        <Link to="/register">
        <button>REGISTER</button>
        </Link>
        <Link to="/login">
        <button>LOGIN</button>
        </Link>
    </div>
</div>
    );
};