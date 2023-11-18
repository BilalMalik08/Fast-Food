import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./addToCartSuccessPopup.css";

const AddToCartSuccessPopup = ({ showModal, closeModal, message }) => {
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
      centered
      dialogClassName="addToCart-modal-style"
      contentClassName="addToCart-modal-content"
    >
      <Modal.Body>
        {message}
        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
      </Modal.Body>
    </Modal>
  );
};

export default AddToCartSuccessPopup;
