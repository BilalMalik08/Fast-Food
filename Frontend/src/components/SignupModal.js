import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const SignupModal = ({ show, handleClose, handleSignup }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to register the user
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        userData
      );

      if (response.status === 201) {
        const data = response.data;
        // Successful registration, you can handle the data as needed
        console.log("Registration successful:", data);
        handleSignup(data.token, data.user);
        handleClose(); // Close the modal
      } else {
        // Handle error response from the server
        console.error("Registration failed:", response.data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
