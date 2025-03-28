import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryManagement from "../components/CategoryManagement";
import MenuManagement from "../components/MenuManagement";

const AdminDashBoard = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("categories");

  const handleLogout = () => {
    localStorage.removeItem("adminkey");
    navigate("/"); 
  };

  return (
    <div className="p-6 ">
     
      <div className="flex justify-between items-center mb-6 ">
        <h1 className="text-2xl font-bold text-blue-300 font-oswald">Welcome to Deep Net Soft Cafe</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

     
      <div className="flex space-x-4 border-b border-white gap-6 py-4 font-oswald font-extrabold ">
        <button
          onClick={() => setSelectedTab("categories")}
          className={`px-4 py-2 rounded-full  ${
            selectedTab === "categories" ? "border-b-2 border-blue-800 font-bold text-blue-800 bg-white" : "text-white font-medium"
          }`}
        >
          Category Management
        </button>
        <button
          onClick={() => setSelectedTab("menu")}
          className={`px-4 py-2 rounded-full ${
            selectedTab === "menu" ? "border-b-2 border-blue-800 font-bold text-blue-800 bg-white" : "text-white font-medium"
          }`}
        >
          Menu Management
        </button>
      </div>

      
      <div className="mt-6">
        {selectedTab === "categories" ? <CategoryManagement /> : <MenuManagement />}
      </div>
    </div>
  );
};

export default AdminDashBoard;
