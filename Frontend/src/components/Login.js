import "./login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import ThankYou from "./ThankYou";
import LoadingSpinner from "./LoadingSpinner";
import SignupModal from "./SignupModal";
import SuccessPopup from "./SuccessPopup";
import ErrorAlert from "./ErrorAlert";
import { useUser } from "./UserContext";
import Footer from "./Footer";
import apiURL from "../services/api";

function Login() {
  const { updateUserFirstName } = useUser();
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showInvalidCredentialsAlert, setShowInvalidCredentialsAlert] =
    useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorAlertMessage, setErrorAlertMessage] = useState("");

  const [userFirstName, setUserFirstName] = useState(""); // New state to store user's first name

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value.toLowerCase() });
  };

  const resetForm = () => {
    setUserFormData({
      email: "",
      password: "",
    });
  };

  const handleSignup = async (userData) => {
    try {
      const response = await axios.post(`${apiURL}/auth/signup`, userData, {
        withCredentials: true,
      });

      if (response.status === 201) {
        console.log("User registered successfully:", response.data);
        // You may want to do something after successful registration, e.g., show a success message
      } else {
        console.error("Registration failed:", response.data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setShowSignupModal(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userFormData;

    try {
      const response = await axios.post(
        `${apiURL}/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log("Login successful:", data);
        updateUserFirstName(data.user.firstName);

        // Set user's first name in state
        setUserFirstName(data.user.firstName);

        localStorage.setItem("userFirstName", data.user.firstName);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLoggedIn(true);
          resetForm(); // Clear the form
          window.history.pushState(null, "", "/thankyou");
        }, 3000);
      } else {
        console.error("Login failed:", response.data);
        setShowErrorAlert(true);

        // Check the type of error and provide an appropriate message
        if (response.status === 401) {
          setErrorAlertMessage(
            "Invalid credentials: The email or password you entered is incorrect"
          );
        } else {
          // Set the error message to the detailed error information
          setErrorAlertMessage(`An error occurred: ${response.data.message}`);
        }

        // Auto-hide the error alert after 3 seconds
        setTimeout(() => {
          setShowErrorAlert(false);
          setErrorAlertMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error during login:", error);

      // Log the detailed error information
      console.log("Detailed error:", error.response);

      setShowErrorAlert(true);

      // Check the type of error and provide an appropriate message
      if (error.response && error.response.status === 401) {
        setErrorAlertMessage(
          "Invalid credentials: The email or password you entered is incorrect"
        );
      } else {
        // Set the error message to the detailed error information
        setErrorAlertMessage(`An error occurred: ${error.message}`);
      }

      // Auto-hide the error alert after 3 seconds
      setTimeout(() => {
        setShowErrorAlert(false);
        setErrorAlertMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    let timer;
    if (loggedIn) {
      setShowSuccessPopup(true);
      timer = setTimeout(() => {
        setShowSuccessPopup(false);
        setLoggedIn(false);
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
                  <button
                    className="LoginForm-btn form-btn"
                    type="button"
                    onClick={() => setShowSignupModal(true)}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="container signup-msg-container">
                  {" "}
                  <p className="signup-msg">Don't have an account?</p>
                </div>

                {showErrorAlert && (
                  <ErrorAlert
                    onClose={() => setShowErrorAlert(false)}
                    errorMessage={errorAlertMessage}
                  />
                )}
              </div>
            </div>
          )}
          <SuccessPopup
            showModal={showSuccessPopup}
            closeModal={() => setShowSuccessPopup(false)}
            message="Login Successful! Thank you for logging in."
          />
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
