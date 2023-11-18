import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalBurger = ({ show, handleClose, burger, onSave }) => {
  const [editedBurger, setEditedBurger] = useState({ ...burger });

  useEffect(() => {
    // Update the editedBurger state when the burger prop changes
    setEditedBurger({ ...burger });
  }, [burger]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedBurger({ ...editedBurger, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedBurger({ ...editedBurger, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedBurger);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Burger</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBurgerName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter burger name"
              name="name"
              value={editedBurger.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBurgerDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter burger description"
              name="description"
              value={editedBurger.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBurgerPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter burger price"
              name="price"
              value={editedBurger.price || ""}
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

export default EditFormModalBurger;
