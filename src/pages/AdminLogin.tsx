import { useState } from "react";
import { adminLogin } from "../Apis"; // Import login API
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios"; // Import for error handling

const AdminLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await adminLogin({ email, password });

      if (res.status === 200) {
        localStorage.setItem("adminkey", res.data.adminkey);
        toast.success("Login successful!");
        navigate("/dashboard");
      }
    } catch (error: unknown) {
      const err = error as AxiosError;
      if (err.response) {
        if (err.response.status === 401) {
          toast.error("Invalid credentials");
        } else {
          toast.error(`Error: ${err.response.status}`);
        }
      } else {
        toast.error("Server error! Try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 font-oswald">
      <div className="w-80 p-6 bg-white shadow-lg rounded">
        <h2 className="text-xl font-semibold text-center mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
