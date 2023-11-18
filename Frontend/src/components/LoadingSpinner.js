import React from "react";
import "./loadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
      <h1 className="loading-heading">Loading Please Wait...</h1>
    </div>
  );
}

export default LoadingSpinner;
