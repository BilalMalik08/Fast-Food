import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import RegisterSuccessPopup from "./RegisterSuccessPopup";
import RegisterFailedPopup from "./RegisterFailedPopup";
import apiURL from "../services/api";

const SignupModal = ({ show, handleClose }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
  });

  const [showRegisterSuccessPopup, setShowRegisterSuccessPopup] =
    useState(false);
  const [showRegisterFailedPopup, setShowRegisterFailedPopup] = useState(false);
  const [registerFailedMessage, setRegisterFailedMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiURL}/auth/signup`, userData);

      if (response && response.status === 201) {
        const data = response.data;
        console.log("Registration successful:", data);
        if (data && data.user) {
          // Display the RegisterSuccessPopup
          setShowRegisterSuccessPopup(true);

          // Reset the userData state to clear the form
          setUserData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            password: "",
          });

          // Close the SignupModal
          handleClose();
        } else {
          console.error("Invalid response format:", response);
        }
      } else {
        console.error("Registration failed:", response);
        if (response && response.data && response.data.message) {
          // Display the RegisterFailedPopup with the error message
          setRegisterFailedMessage(response.data.message);
          setShowRegisterFailedPopup(true);
        } else {
          console.error("Invalid response format:", response);
        }
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );

      if (error.response && error.response.status === 400) {
        // Display the RegisterFailedPopup with the error message
        setRegisterFailedMessage(error.response.data.message);
        setShowRegisterFailedPopup(true);
      } else {
        console.error(
          "Error during registration:",
          error.response?.data || error.message
        );
      }
    }
  };

  const closeRegisterSuccessPopup = () => {
    setShowRegisterSuccessPopup(false);
  };

  const closeRegisterFailedPopup = () => {
    setShowRegisterFailedPopup(false);
    setRegisterFailedMessage("");
  };

  useEffect(() => {
    let successTimer;
    let failedTimer;

    if (showRegisterSuccessPopup) {
      successTimer = setTimeout(() => {
        setShowRegisterSuccessPopup(false);
      }, 3000);
    }

    if (showRegisterFailedPopup) {
      failedTimer = setTimeout(() => {
        setShowRegisterFailedPopup(false);
        setRegisterFailedMessage("");
      }, 3000);
    }

    return () => {
      clearTimeout(successTimer);
      clearTimeout(failedTimer);
    };
  }, [showRegisterSuccessPopup, showRegisterFailedPopup]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your contact number"
                name="contact"
                value={userData.contact}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="btn btn-dark mt-2">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <RegisterSuccessPopup
        showModal={showRegisterSuccessPopup}
        closeModal={closeRegisterSuccessPopup}
        message="Registration Successful! Thank you for signing up."
      />

      <RegisterFailedPopup
        showModal={showRegisterFailedPopup}
        closeModal={closeRegisterFailedPopup}
        errorMessage={registerFailedMessage}
      />
    </>
  );
};

export default SignupModal;
