import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddItemModal = ({ show, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="itemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter item name" />
          </Form.Group>

          <Form.Group controlId="itemDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter item description"
            />
          </Form.Group>

          <Form.Group controlId="itemPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter item price" />
          </Form.Group>

          <Form.Group controlId="itemImageUpload">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control type="file" accept="image/*" />
          </Form.Group>

          <Button type="submit" className="btn btn-dark mt-2">
            Add Item
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddItemModal;