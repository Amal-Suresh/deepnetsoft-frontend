import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 🔹 Category APIs
export const getCategories = async () => {
    const res = await axios.get(`${API_BASE_URL}/categories`);
    return res
};

export const addCategory = async (category) => {
    const res = await axios.post(`${API_BASE_URL}/categories`, category);
    return res
};


export const deleteCategory = async (id) => {
    const res = await axios.delete(`${API_BASE_URL}/categories/${id}`);
    return res
};

// 🔹 Menu Item APIs
export const getMenuItems = async (page = 1,  perPage, categoryId = "") => {

const headers = {
    "X-Page": page,
    "X-Per-Page": perPage,
    ...(categoryId && { "X-Category-Id": categoryId }), 
};

const res = await axios.get(`${API_BASE_URL}/menu`, { headers });
return res;
};

export const saveMenuItem = async (item) => {
    const res = await axios.post(`${API_BASE_URL}/menu`, item);
    return res;
};


export const deleteMenuItem = async (id) => {
    const res = await axios.delete(`${API_BASE_URL}/menu/${id}`);
    return res
};

// 🔹 Auth APIs (For Admin Login)
export const adminLogin = async (credentials) => {
    const res = await axios.post(`${API_BASE_URL}/admin/login`, credentials);
    return res
};
