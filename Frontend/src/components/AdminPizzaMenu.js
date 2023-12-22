import "./adminFoodMenu.css";
import React, { useState } from "react";
import PizzaMenuEditComp from "./PizzaMenuEditComp";
import AddItemModal from "./AddItemModal";

function AdminPizzaMenu() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const handleAddItemClick = () => {
    setShowAddItemModal(true);
  };

  const handleAddItemClose = () => {
    setShowAddItemModal(false);
  };

  return (
    <>
      <div className="row admin-foodMenu-row1">
        <div className="container admin-foodMenu-btn-container">
          <button
            className="btn admin-foodMenu-btn btn-dark"
            onClick={handleAddItemClick}
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="row admin-foodMenu-row2">
        <PizzaMenuEditComp />
      </div>

      {/* Add Item Modal */}
      <AddItemModal show={showAddItemModal} handleClose={handleAddItemClose} />
    </>
  );
}

export default AdminPizzaMenu;
