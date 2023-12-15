import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const SignupModal = ({ show, handleClose }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        userData
      );

      if (response && response.status === 201) {
        const data = response.data;
        console.log("Registration successful:", data);
        if (data && data.user) {
          handleClose();
          // Reset the userData state to clear the form
          setUserData({
            name: "",
            email: "",
            contact: "",
            password: "",
          });
        } else {
          console.error("Invalid response format:", response);
        }
      } else {
        console.error("Registration failed:", response);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Registration failed:", error.response.data.message);
      } else {
        console.error(
          "Error during registration:",
          error.response?.data || error.message
        );
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignup}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={userData.name}
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
  );
};

export default SignupModal;
