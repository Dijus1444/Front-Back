const API_URL = "http://localhost:5500/categories"

const getToken = () => JSON.parse(localStorage.getItem("user"))?.token;

// Get all categories (category list)
export const getAllCategories = async() => {
    const response = await fetch(`${API_URL}/all`);

    if (!response) throw new Error("Failed to fetch categories");

    const data = await response.json();
    return data;
};

// create category
export const createCategory = async(categorieName) => {
    const token = getToken();

    const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: 
        {"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({catgeoryName}),
    });
    if (!response) throw new Error("Failed to fetch categories");
    return response.json();
};


// update category

export const updateCategory = async(id, categorieName) => {
    const token = getToken();

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: 
        {"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({catgeoryName}),
    });
    if (!response) throw new Error("Failed to update categories");
    return response.json();
};

// delete category

export const deleteCategory = async(id) => {
    const token = getToken();

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response) throw new Error("Failed to delete categories");
    return response.json();
};