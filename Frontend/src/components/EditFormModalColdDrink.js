import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalColdDrink = ({ show, handleClose, coldDrink, onSave }) => {
  const [editedColdDrink, setEditedColdDrink] = useState({ ...coldDrink });

  useEffect(() => {
    // Update the editedColdDrink state when the coldDrink prop changes
    setEditedColdDrink({ ...coldDrink });
  }, [coldDrink]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedColdDrink({ ...editedColdDrink, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedColdDrink({ ...editedColdDrink, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedColdDrink);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Cold Drink Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formColdDrinkName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter cold drink item name"
              name="name"
              value={editedColdDrink.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formColdDrinkDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter cold drink item description"
              name="description"
              value={editedColdDrink.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formColdDrinkPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter cold drink item price"
              name="price"
              value={editedColdDrink.price || ""}
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

export default EditFormModalColdDrink;
