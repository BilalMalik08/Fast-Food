import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddCategoryModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    adminCategory: "",
    items: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.adminCategory ||
      !formData.items ||
      !formData.description ||
      !formData.image
    ) {
      console.error("Please fill in all the fields");
      return;
    }

    const data = new FormData();
    data.append("image", formData.image);
    data.append("adminCategory", formData.adminCategory);
    data.append("items", formData.items);
    data.append("description", formData.description);

    try {
      // Update the Axios request URL to match the correct endpoint
      const response = await axios.post(
        "https://fast-food-api.vercel.app/menu/categories/upload",
        data
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="adminCategory">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              name="adminCategory"
              placeholder="Enter category name"
              onChange={handleChange}
              required // Add required attribute
            />
          </Form.Group>

          <Form.Group controlId="items">
            <Form.Label>Some Items Name</Form.Label>
            <Form.Control
              type="text"
              name="items"
              placeholder="Enter some items name, separated by commas"
              onChange={handleChange}
              required // Add required attribute
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              placeholder="Enter category description"
              onChange={handleChange}
              required // Add required attribute
            />
          </Form.Group>

          <Form.Group controlId="imageUpload">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required // Add required attribute
            />
          </Form.Group>

          <Button type="submit" className="btn btn-dark mt-2">
            Save Category
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCategoryModal;
