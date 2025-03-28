import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import Menu from "./pages/Menu";
import AdminLogin from "./pages/AdminLogin";
import AdminDashBoard from "./pages/AdminDashBoard";

// Protected Route Component
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAdmin = localStorage.getItem("adminkey");
  return isAdmin ? children : <Navigate to="/admin" replace />;
};

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route
          path="/admin"
          element={localStorage.getItem("adminkey") ? <Navigate to="/dashboard" /> : <AdminLogin />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashBoard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
