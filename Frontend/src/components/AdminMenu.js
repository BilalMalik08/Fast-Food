import "./adminMenu.css";
import AdminMenuComp from "./AdminMenuComp";

function AdminMenu() {
  return (
    <>
      <div className="row adminMenu-row1">
        <div className="container adminMenu-btn-container">
          <button className="btn adminMenu-btn btn-outline-dark" type="submit">
            Add Category
          </button>
        </div>
      </div>

      <div className="row adminMenu-row2">
        <AdminMenuComp />
      </div>
    </>
  );
}

export default AdminMenu;
