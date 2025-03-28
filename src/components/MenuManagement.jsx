import React, { useState, useEffect } from "react";
import { getMenuItems, saveMenuItem, deleteMenuItem, getCategories } from "../Apis";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "./Pagination";

const MenuManagement = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const perPage = 5;
  useEffect(() => {
    fetchItems(currentPage);
    setEditing(null); 
  }, [currentPage]); 

  useEffect(() => {
    fetchCategories(); 
  }, []); 
  

  const fetchItems = async (page = 1) => {
    try {
      setLoading(true);
      const res = await getMenuItems(page, perPage);
      setCurrentPage(res.data.currentPage);
      setTotalPage(res.data.totalPages);
      setItems(res.data.menuItems);
    } catch (error) {
      toast.error("Failed to fetch menu items");
    } finally {
      setLoading(false);
    }
  };
  

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      toast.error("Failed to fetch categories");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveMenuItem({ _id: editing, name, description, price, category });
      toast.success(editing ? "Item updated successfully" : "Item added successfully");
      resetForm();
      fetchItems(currentPage);
    } catch (error) {
      toast.error("Failed to save item");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    setLoading(true);
    try {
      await deleteMenuItem(id);
      toast.success("Item deleted successfully");
      fetchItems();
    } catch (error) {
      toast.error("Failed to delete item");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
      fetchItems(page); 
    }
  };
  

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setEditing(null);
  };

  return (
    <div className="p-4 bg-gray-100 rounded mt-6 font-oswald">
      <h2 className="text-lg font-bold mb-3">Menu Items Management</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="text" placeholder="Item Name" className="p-2 border w-full" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" className="p-2 border w-full" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Price" className="p-2 border w-full" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <select className="p-2 border w-full" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Saving..." : editing ? "Update Item" : "Add Item"}
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-2">Loading...</p>}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-xl p-4 border border-gray-200">
              <h3 className="text-xl font-bold text-blue-700">{item.name}</h3>
              <p className="text-gray-600 italic">{item.description}</p>
              <div className="mt-2">
                <p className="text-gray-700">
                  Price: <span className="font-semibold text-green-600">${item.price}</span>
                </p>
                <p className="text-gray-700">
                  Category: <span className="font-semibold text-purple-600">{item.category.name}</span>
                </p>
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
                  onClick={() => {
                    setEditing(item._id);
                    setName(item.name);
                    setDescription(item.description);
                    setPrice(item.price);
                    setCategory(item.category);
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-1 md:col-span-2 text-center">No menu items available.</p>
        )}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default MenuManagement;
