const API_URL = "http://localhost:5500/users"

// REGISTER
export const registerUser = async(userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }
    

    return data;
};

//LOGIN
export const loginUser = async(userData) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }
    

    return data;
};

//Sign out 
export const handleSignOut = (navigate) => {
    localStorage.removeItem("user");
    navigate;
};
