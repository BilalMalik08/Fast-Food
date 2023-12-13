import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalHotDrink = ({ show, handleClose, hotDrink, onSave }) => {
  const [editedHotDrink, setEditedHotDrink] = useState({ ...hotDrink });

  useEffect(() => {
    // Update the editedHotDrink state when the hotDrink prop changes
    setEditedHotDrink({ ...hotDrink });
  }, [hotDrink]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If the price is 0 or negative, set the price to 1
      setEditedHotDrink({ ...editedHotDrink, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedHotDrink({ ...editedHotDrink, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedHotDrink);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Hot Drink Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formHotDrinkName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter hot drink item name"
              name="name"
              value={editedHotDrink.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHotDrinkDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter hot drink item description"
              name="description"
              value={editedHotDrink.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHotDrinkPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter hot drink item price"
              name="price"
              value={editedHotDrink.price || ""}
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

export default EditFormModalHotDrink;
