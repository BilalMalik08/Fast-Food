import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalSoup = ({ show, handleClose, soup, onSave }) => {
  const [editedSoup, setEditedSoup] = useState({ ...soup });

  useEffect(() => {
    // Update the editedSoup state when the soup prop changes
    setEditedSoup({ ...soup });
  }, [soup]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedSoup({ ...editedSoup, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedSoup({ ...editedSoup, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedSoup);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Soup Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formSoupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter soup item name"
              name="name"
              value={editedSoup.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSoupDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter soup item description"
              name="description"
              value={editedSoup.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSoupPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter soup item price"
              name="price"
              value={editedSoup.price || ""}
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

export default EditFormModalSoup;
