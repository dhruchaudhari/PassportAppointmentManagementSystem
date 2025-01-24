import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send logout request to the backend
      const accessToken = localStorage.getItem('accessToken');
      
      const response = await axios.post("http://localhost:5000/users/logout", {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      
      if (response.status === 200) {
        // Clear localStorage
        localStorage.removeItem("userId");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");

        // Redirect to login page
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.msg || error.message);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <div className="card p-4 col-md-6 col-lg-5 text-center">
        <h2>Welcome to the Home Page</h2>
        <p>You are successfully logged in!</p>
        <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
