import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalPizza = ({ show, handleClose, pizza, onSave }) => {
  const [editedPizza, setEditedPizza] = useState({ ...pizza });

  useEffect(() => {
    // Update the editedPizza state when the pizza prop changes
    setEditedPizza({ ...pizza });
  }, [pizza]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedPizza({ ...editedPizza, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedPizza({ ...editedPizza, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedPizza);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Pizza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formPizzaName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pizza name"
              name="name"
              value={editedPizza.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPizzaDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter pizza description"
              name="description"
              value={editedPizza.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPizzaPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter pizza price"
              name="price"
              value={editedPizza.price || ""}
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

export default EditFormModalPizza;
