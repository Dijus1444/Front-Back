import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { handleSignOut } from "../helpers/userHelpers";

export const AdminLayout = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            navigate("/");
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    if (!user) {
        return <p>Loading.....</p>;
    }

    if (user.role !== "admin") {
        return <p>You don't have access to this page</p>;
    }

    return (
        <div>
            <nav>
                <h2>ADMIN panel</h2>

                <p>Welcome, {user.name}!</p>

                <NavLink to="/admindashboard/users">Users</NavLink>
                <br />

                <NavLink to="/admindashboard/dishes">Dishes</NavLink>
                <br />

                <NavLink to="/admindashboard/categories">
                    Categories
                </NavLink>
                <br />

                <button onClick={() => handleSignOut(navigate("/"))}>Sign out</button>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>&copy; 2026</footer>
        </div>
    );
};