import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalSandwich = ({ show, handleClose, sandwich, onSave }) => {
  const [editedSandwich, setEditedSandwich] = useState({ ...sandwich });

  useEffect(() => {
    // Update the editedBurger state when the burger prop changes
    setEditedSandwich({ ...sandwich });
  }, [sandwich]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedSandwich({ ...editedSandwich, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedSandwich({ ...editedSandwich, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedSandwich);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Sandwich</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formSandwichName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter sandwich name"
              name="name"
              value={editedSandwich.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSandwichDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter sandwich description"
              name="description"
              value={editedSandwich.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSandwichPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter sandwich price"
              name="price"
              value={editedSandwich.price || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditFormModalSandwich;
