import "./login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import ThankYou from "./ThankYou";
import LoadingSpinner from "./LoadingSpinner";
import InvalidCredentialsAlert from "./InvalidCredentialsAlert";
import SignupModal from "./SignupModal";
import Footer from "./Footer";

function Login() {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showInvalidCredentialsAlert, setShowInvalidCredentialsAlert] =
    useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value.toLowerCase() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userFormData;

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const data = response.data;
        // Successful login, you can handle the data as needed
        console.log("Login successful:", data);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLoggedIn(true);
          // Redirect to the ThankYou page or any other page
          window.history.pushState(null, "", "/thankyou");
        }, 3000);
      } else {
        // Handle error response from the server
        console.error("Login failed:", response.data);
        setShowInvalidCredentialsAlert(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle other errors (network issues, etc.)
    }
  };

  const handleSignup = async (userData) => {
    // Add your signup logic here using the userData
    // For example, make an API call to register the user
    console.log("Signup data:", userData);

    // Close the signup modal
    setShowSignupModal(false);
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
    <>
      <div className="row login-row1">
        <form onSubmit={handleSubmit}>
          {loading ? (
            <LoadingSpinner />
          ) : loggedIn ? (
            <ThankYou />
          ) : (
            <div className="row LoginForm-row1">
              <div className="container LoginForm-container">
                <h1>
                  Welcome to Fast Food <FontAwesomeIcon icon={faBurger} />
                </h1>
                <div className="box">
                  <i className="fa fa-envelope"></i>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Username"
                    required
                    value={userFormData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="box">
                  <i className="fa fa-unlock-alt"></i>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                    value={userFormData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="container login-signup">
                  {" "}
                  <button className="LoginForm-btn form-btn" type="submit">
                    Log In
                  </button>
                  <Link to="/signup">
                    <button
                      className="LoginForm-btn form-btn"
                      type="submit"
                      onClick={() => setShowSignupModal(true)}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
                <div className="container signup-msg-container">
                  {" "}
                  <p className="signup-msg">Don't have an account?</p>
                </div>

                {showInvalidCredentialsAlert && (
                  <InvalidCredentialsAlert
                    onClose={() => setShowInvalidCredentialsAlert(false)}
                  />
                )}
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="row login-row2">
        <Footer />
      </div>
      <SignupModal
        show={showSignupModal}
        handleClose={() => setShowSignupModal(false)}
        handleSignup={handleSignup}
      />
    </>
  );
}

export default Login;
