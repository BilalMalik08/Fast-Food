import React from "react";
import { Modal } from "react-bootstrap";
import "./registerFailedPopup.css";

const RegisterFailedPopup = ({ showModal, closeModal, errorMessage }) => {
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      centered
      dialogClassName="registerFailed-modal-style"
      contentClassName="registerFailed-modal-content"
    >
      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterFailedPopup;
