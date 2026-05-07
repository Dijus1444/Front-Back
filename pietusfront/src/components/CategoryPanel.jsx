import React, { useEffect, useState } from "react";

export const CategoryPanel = () => {
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        // loading categories
    }, []);

    return (
        <div>
            <h1>Category management</h1>

            <div>
                <ul>
                    {/* {categories mapped} */}
                </ul>

                <form onSubmit={}>
                    <input
                        type="text"
                        value={}
                        onChange={}
                        placeholder="Category name"
                        required
                    />

                    <button type="submit">
                        {editingCategory ? "Update" : "Create"}
                    </button>
                </form>
            </div>
        </div>
    );
};