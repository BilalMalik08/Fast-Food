import "./adminMenu.css";
import React, { useState } from "react";
import AdminMenuComp from "./AdminMenuComp";
import AddCategoryModal from "./AddCategoryModal";

function AdminMenu() {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

  const handleAddCategoryClick = () => {
    setShowAddCategoryModal(true);
  };

  const handleAddCategoryClose = () => {
    setShowAddCategoryModal(false);
  };

  return (
    <>
      <div className="row adminMenu-row1">
        <div className="container adminMenu-btn-container">
          <button
            className="btn adminMenu-btn btn-dark"
            onClick={handleAddCategoryClick}
          >
            Add Category
          </button>
        </div>
      </div>

      <div className="row adminMenu-row2">
        <AdminMenuComp />
      </div>

      <AddCategoryModal
        show={showAddCategoryModal}
        handleClose={handleAddCategoryClose}
      />
    </>
  );
}

export default AdminMenu;
