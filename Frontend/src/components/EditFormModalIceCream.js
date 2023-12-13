import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalIceCream = ({ show, handleClose, iceCream, onSave }) => {
  const [editedIceCream, setEditedIceCream] = useState({ ...iceCream });

  useEffect(() => {
    // Update the editedIceCream state when the iceCream prop changes
    setEditedIceCream({ ...iceCream });
  }, [iceCream]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input name is "price" and the entered value is greater than 0
    if (name === "price" && parseFloat(value) <= 0) {
      // If price is 0 or negative, set the price to 1
      setEditedIceCream({ ...editedIceCream, [name]: 1 });
    } else {
      // Update other input fields directly
      setEditedIceCream({ ...editedIceCream, [name]: value });
    }
  };

  const handleSave = () => {
    onSave(editedIceCream);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Ice Cream Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formIceCreamName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ice cream item name"
              name="name"
              value={editedIceCream.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIceCreamDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter ice cream item description"
              name="description"
              value={editedIceCream.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIceCreamPrice">
            <Form.Label>Price (PKR)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter ice cream item price"
              name="price"
              value={editedIceCream.price || ""}
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

export default EditFormModalIceCream;
