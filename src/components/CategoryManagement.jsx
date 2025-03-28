import React, { useState, useEffect } from "react";
import { getCategories, addCategory, deleteCategory } from "../Apis"; // Import API functions
import { toast } from "react-hot-toast"; // Import react-hot-toast

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      toast.error("Error fetching categories");
      console.error("Error fetching categories:", error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        await addCategory({id:editing, name, description });
        toast.success("Category updated successfully");
      } else {
        await addCategory({ name, description });
        toast.success("Category added successfully");
      }
      setName("");
      setDescription("");
      setEditing(null);
      fetchCategories();
    } catch (error) {
      toast.error("Error saving category");
      console.error("Error saving category:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    setLoading(true);
    try {
      await deleteCategory(id);
      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (error) {
      toast.error("Error deleting category");
      console.error("Error deleting category:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gray-100 rounded mt-6 font-oswald">
      <h2 className="text-lg font-bold mb-3">Menu Category Management</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Category Name"
          className="p-2 border w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description (optional)"
          className="p-2 border w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Saving..." : editing ? "Update" : "Add"} Category
        </button>
      </form>

      {loading && <p className="text-gray-500 text-sm mt-3">Loading...</p>}

      <ul className="mt-4">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <li key={cat._id} className="flex justify-between p-2 border-b">
              <span>{cat.name} - {cat.description || "No description"}</span>
              <div>
                <button
                  onClick={() => { 
                    console.log("Editing category ID:", cat._id); // Debugging
                    setEditing(cat._id); 
                    setName(cat.name); 
                    setDescription(cat.description || ""); 
                  }}
                  className="text-blue-500 mr-2"
                  disabled={loading}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(cat._id)} className="text-red-500" disabled={loading}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 mt-2">{loading ? "Loading categories..." : "No categories found"}</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryManagement;
