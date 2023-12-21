import "./adminLoginForm.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSignupModal from "./AdminSignupModal";
import LoadingSpinner from "./LoadingSpinner";
import InvalidCredentialsAlert from "./InvalidCredentialsAlert";
import AdminDashboardContainer from "./AdminDashboardContainer";
import apiURL from "../services/api";

const AdminLoginForm = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showInvalidCredentialsAlert, setShowInvalidCredentialsAlert] =
    useState(false);

  const navigate = useNavigate();

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.toLowerCase() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post(`${apiURL}/auth/admin/login`, {
        email,
        password,
      });

      if (response && response.status === 200) {
        const data = response.data;
        console.log("Admin Login successful:", data);

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLoggedIn(true);
          navigate("/admin/dashboard");
        }, 3000);
      } else {
        console.error("Admin Login failed:", response);
        setShowInvalidCredentialsAlert(true);
      }
    } catch (error) {
      console.error(
        "Error during admin login:",
        error.response?.data || error.message
      );
      setShowInvalidCredentialsAlert(true);
    }
  };

  useEffect(() => {
    let timer;
    if (loggedIn) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [loggedIn]);

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <LoadingSpinner />
      ) : loggedIn ? (
        <AdminDashboardContainer />
      ) : (
        <div className="row adminLoginForm-row1">
          <div className="container adminLoginForm-container">
            <h1>SignIn to Admin Console</h1>
            <div className="box">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="box">
              <i className="fa fa-unlock-alt"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="container login-signup">
              <button className="LoginForm-btn form-btn" type="submit">
                Log In
              </button>
              <button
                className="LoginForm-btn form-btn"
                type="button"
                onClick={openSignupModal}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
      <AdminSignupModal
        show={showSignupModal}
        handleClose={() => setShowSignupModal(false)}
      />
    </form>
  );
};

export default AdminLoginForm;
