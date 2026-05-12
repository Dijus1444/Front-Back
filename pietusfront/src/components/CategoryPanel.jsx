import React, { useEffect, useState } from "react";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "../helpers/categoriesHelpers";

export const CategoryPanel = () => {
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => { loadCategories(); }, []);

    const loadCategories = async () => {
        try {
            const data = await getAllCategories();
            setCategories(data);
            console.log(data)
        } catch (err) { console.error(err); }
    };

    const handleCreateOrUpdate = async (e) => {
        e.preventDefault();

        try {
            if (editingCategory) {
                const updated = await updateCategory(editingCategory._id, categoryName);

                setCategories(
                    categories.map((el) =>
                    (el._id === editingCategory._id ? updated : el))
                );

                setEditingCategory(null);
                setCategoryName("");
            } else {
                const newCategory = await createCategory(categoryName);
                setCategories([...categories, newCategory]);
                setCategoryName("");
            }
        } catch (err) { console.error(err); }
    };

    const handleEdit = (category) => {
        setEditingCategory(category);
        setCategoryName(category.name);
    };

    const handleDelete = async (categoryId) => {
        try {
            await deleteCategory(categoryId);
            setCategories(categories.filter(el => el._id !== categoryId));
        } catch (err) { console.error(err); }
    };

    return (
        <div>
            <h1>Category management</h1>

            <ul>
                {categories.map((el)=>(
                    <li key={el._id}>
                        <span>{el.name}</span>
        <button onClick={()=> handleEdit(el)}>Edit</button>
        <button onClick={()=> handleDelete(el._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleCreateOrUpdate}>
                <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Category name"
                    required
                />

                <button type="submit">
                    {editingCategory ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
};