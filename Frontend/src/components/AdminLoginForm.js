import "./adminLoginForm.css";
import AdminDashboardContainer from "./AdminDashboardContainer";
import LoadingSpinner from "./LoadingSpinner";
import InvalidCredentialsAlert from "./InvalidCredentialsAlert";
import React, { useState, useEffect } from "react";

function AdminLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // State to track loading status
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [showInvalidCredentialsAlert, setShowInvalidCredentialsAlert] =
    useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.toLowerCase() }); // Convert to lowercase
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // Simulated login logic for demonstration purposes
    if (email === "bilal@admin" && password === "bilalmalik") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLoggedIn(true);
        window.history.pushState(null, "", "/dashboard");
      }, 3000);
    } else {
      setShowInvalidCredentialsAlert(true); // Show the invalid credentials alert
    }
  };

  useEffect(() => {
    let timer;
    if (loggedIn) {
      // If logged in, set a timer to hide loading spinner after 3 seconds
      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    // Clean up the timer to prevent memory leaks
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
            <button type="submit" className="adminLoginForm-btn">
              Sign In
            </button>
            {showInvalidCredentialsAlert && (
              <InvalidCredentialsAlert
                onClose={() => setShowInvalidCredentialsAlert(false)}
              />
            )}
          </div>
        </div>
      )}
    </form>
  );
}

export default AdminLoginForm;
