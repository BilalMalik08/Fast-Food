import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./registerSuccessPopup.css";

const RegisterSuccessPopup = ({ showModal, closeModal, message }) => {
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      centered
      dialogClassName="registerSuccess-modal-style"
      contentClassName="registerSuccess-modal-content"
    >
      <Modal.Body>
        <p>{message}</p>
        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
      </Modal.Body>
    </Modal>
  );
};

export default RegisterSuccessPopup;
