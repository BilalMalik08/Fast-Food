import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalChicken = ({ show, handleClose, chicken, onSave }) => {
  const [editedChicken, setEditedChicken] = useState({ ...chicken });

  useEffect(() => {
    // Update the editedChicken state when the chicken prop changes
    setEditedChicken({ ...chicken });
  }, [chicken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedChicken({ ...editedChicken, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedChicken({ ...editedChicken, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedChicken);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Chicken Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formChickenName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter chicken item name"
              name="name"
              value={editedChicken.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formChickenDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter chicken item description"
              name="description"
              value={editedChicken.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formChickenPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter chicken item price"
              name="price"
              value={editedChicken.price || ""}
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

export default EditFormModalChicken;
