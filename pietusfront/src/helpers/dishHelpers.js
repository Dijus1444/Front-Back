const API_URL = "http://localhost:5500"


// get all dishes
export const fetchDishes = async() => {
    try {
        const res = await fetch(`${API_URL}/dishes/all`);
        const data = await res.json();
        return Array.isArray(data) ? data: data.dishes || [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

// get all categories
export const fetchCategories = async() => {
    try {
        const res = await fetch(`${API_URL}/categories/all`);
        const data = await res.json();
        return Array.isArray(data) ? data: data.categories || [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

// create dish
export const createDish = async(dish, token) => {
   try {
        const res = await fetch(`${API_URL}/dishes`,{
        method: "POST",
        headers: 
        {"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dish),
   });
        
   return await res.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// update dish
export const updateDish = async(id, dish, token) => {
    try {
        const res = await fetch(`${API_URL}/dishes/${id}`,{
        method: "PUT",
        headers: 
        {"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dish),
   });
        
   return await res.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// delete dish
export const deleteDish = async(id, token) => {
    try {
        const res = await fetch(`${API_URL}/dishes/${id}`,{
        method: "DELETE",
        headers: 
        {
            Authorization: `Bearer ${token}`,
        },
   });
        
   return await res.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// toggle rating
export const toggleRating = async(id, token) => {
    try {
        const res = await fetch(`${API_URL}/dishes/${id}/rate`,{
        method: "POST",
        headers: 
        {
            Authorization: `Bearer ${token}`,
        },
   });
        
   return await res.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}