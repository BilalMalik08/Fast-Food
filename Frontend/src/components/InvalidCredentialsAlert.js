import React from "react";
import Alert from "react-bootstrap/Alert";
import "./invalidCredentialsAlert.css"; // Import custom CSS for styling

function InvalidCredentialsAlert({ onClose }) {
  return (
    <div className="invalid-credentials-alert">
      <Alert variant="danger" onClose={onClose} dismissible>
        <Alert.Heading>Invalid Credentials</Alert.Heading>
        <p>The email or password you entered is incorrect. Please try again.</p>
      </Alert>
    </div>
  );
}

export default InvalidCredentialsAlert;
