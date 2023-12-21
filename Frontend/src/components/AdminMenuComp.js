import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditCategoryModal from "./EditCategoryModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import apiURL from "../services/api";

function AdminMenuComp() {
  const [menu, setMenu] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`${apiURL}/menu`);
        setMenu(response.data);
        console.log("Menu items:", response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  const deleteCategory = (category) => {
    setCategoryToDelete(category);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(
        `${apiURL}/menu/${categoryToDelete._id}`
      );
      console.log(response.data);
      // Remove the deleted category from the state
      setMenu((prevMenu) =>
        prevMenu.filter((item) => item._id !== categoryToDelete._id)
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    } finally {
      // Close the confirmation modal
      setShowDeleteConfirmation(false);
      setCategoryToDelete(null);
    }
  };

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setShowEditModal(true);
  };

  return (
    <>
      <div className="row menu-card-row">
        <div className="container-fluid menu-card-container">
          <div className="row row-cols-1 row-cols-md-2 menu-card-row-cols g-4">
            {menu.map((menuItem) => (
              <div
                className="col menu-card-col admin-menu-card-col"
                key={menuItem._id}
              >
                <div className="card menu-card admin-menu-card">
                  <img
                    className="menu-card-img"
                    src={`/admin/adminmenu/${menuItem.image}`}
                    alt={menuItem.adminCategory}
                  />

                  <div className="card-body menu-card-body">
                    <div className="menu-card-title-container">
                      <h5 className="card-title menu-card-title">
                        {menuItem.adminCategory}
                      </h5>
                    </div>
                    <div className="menu-card-text-container">
                      <p className="card-text menu-card-text">
                        All ranges of {menuItem.description.toLowerCase()}{" "}
                        available
                      </p>

                      <p className="card-text menu-card-text">
                        {menuItem.items
                          ? menuItem.items.split(", ").map((item, index) => (
                              <span key={index}>
                                {item}
                                {index !==
                                  menuItem.items.split(", ").length - 1 && ", "}
                              </span>
                            ))
                          : "No items available"}{" "}
                        and much more...
                      </p>
                    </div>
                    <div className="menu-card-btn-container">
                      <Link
                        to={`/admin/adminmenu/${menuItem.adminCategory
                          .trim()
                          .toLowerCase()}`}
                      >
                        <button
                          className="btn btn-outline-light menu-card-btn admin-menu-card-btn"
                          type="submit"
                          style={{ margin: "18px 5px" }} // Add inline margin style
                        >
                          Edit Menu
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-light menu-card-btn"
                        type="button"
                        onClick={() => handleEditClick(menuItem)}
                        style={{ margin: "5px" }} // Add inline margin style
                      >
                        Edit Category
                      </button>
                      <button
                        className="btn btn-outline-danger menu-card-btn"
                        type="button"
                        onClick={() => deleteCategory(menuItem)}
                        style={{ margin: "5px" }} // Add inline margin style
                      >
                        Delete Category
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCategory && (
        <EditCategoryModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          categoryData={selectedCategory}
        />
      )}

      <DeleteConfirmationModal
        show={showDeleteConfirmation}
        handleClose={() => setShowDeleteConfirmation(false)}
        handleConfirm={handleDeleteConfirm}
      />
    </>
  );
}

export default AdminMenuComp;
