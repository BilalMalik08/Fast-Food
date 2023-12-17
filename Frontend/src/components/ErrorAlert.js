import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./errorAlert.css";

const ErrorAlert = ({ onClose, errorMessage }) => {
  return (
    <Modal
      show={true} // You can control the visibility of the modal using state if needed
      onHide={onClose}
      dialogClassName="loginError-modal-style"
      contentClassName="loginError-modal-content"
      centered
    >
      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ErrorAlert;
