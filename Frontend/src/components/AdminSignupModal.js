import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import RegisterSuccessPopup from "./RegisterSuccessPopup";
import RegisterFailedPopup from "./RegisterFailedPopup";
import apiURL from "../services/api";

const AdminSignupModal = ({ show, handleClose }) => {
  const [adminData, setAdminData] = useState({
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
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiURL}/auth/admin/signup`,
        adminData
      );

      if (response && response.status === 201) {
        const data = response.data;
        console.log("Admin Registration successful:", data);
        setShowRegisterSuccessPopup(true);
        setTimeout(() => {
          setShowRegisterSuccessPopup(false);
          handleClose();
          // Reset the adminData state to clear the form
          setAdminData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            password: "",
          });
        }, 3000);
      } else {
        console.error("Admin Registration failed:", response);
        if (response && response.data && response.data.message) {
          setRegisterFailedMessage(response.data.message);
          setShowRegisterFailedPopup(true);
        } else {
          console.error("Invalid response format:", response);
        }
        // Reset the adminData state to clear the form
        setAdminData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(
        "Error during admin registration:",
        error.response?.data || error.message
      );

      if (error.response && error.response.status === 400) {
        setRegisterFailedMessage(error.response.data.message);
        setShowRegisterFailedPopup(true);
      } else {
        console.error(
          "Error during admin registration:",
          error.response?.data || error.message
        );
      }
      // Reset the adminData state to clear the form
      setAdminData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        password: "",
      });
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
    if (showRegisterSuccessPopup) {
      // Additional logic can be added here if needed
      const { firstName, lastName } = adminData;
      const successMessage = `Admin Registration Successful! Thank you, ${firstName} ${lastName}, for signing up.`;
      setRegisterSuccessMessage(successMessage);
    }
  }, [showRegisterSuccessPopup, adminData]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admin Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={adminData.firstName}
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
                value={adminData.lastName}
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
                value={adminData.email}
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
                value={adminData.contact}
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
                value={adminData.password}
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
        message={registerSuccessMessage}
      />

      <RegisterFailedPopup
        showModal={showRegisterFailedPopup}
        closeModal={closeRegisterFailedPopup}
        errorMessage={registerFailedMessage}
      />
    </>
  );
};

export default AdminSignupModal;
