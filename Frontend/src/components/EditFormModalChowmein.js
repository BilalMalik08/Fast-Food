import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalChowmein = ({ show, handleClose, chowmein, onSave }) => {
  const [editedChowmein, setEditedChowmein] = useState({ ...chowmein });

  useEffect(() => {
    // Update the editedChowmein state when the chowmein prop changes
    setEditedChowmein({ ...chowmein });
  }, [chowmein]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedChowmein({ ...editedChowmein, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedChowmein({ ...editedChowmein, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedChowmein);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Chowmein Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formChowmeinName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter chowmein item name"
              name="name"
              value={editedChowmein.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formChowmeinDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter chowmein item description"
              name="description"
              value={editedChowmein.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formChowmeinPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter chowmein item price"
              name="price"
              value={editedChowmein.price || ""}
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

export default EditFormModalChowmein;
