import "./adminFoodMenu.css";
import ChickenMenuEditComp from "./ChickenMenuEditComp";

function AdminChickenMenu() {
  return (
    <>
      <div className="row admin-foodMenu-row1">
        <div className="container admin-foodMenu-btn-container">
          <button className="btn admin-foodMenu-btn btn-dark" type="submit">
            Add Item
          </button>
        </div>
      </div>

      <div className="row admin-foodMenu-row2">
        <ChickenMenuEditComp />
      </div>
    </>
  );
}

export default AdminChickenMenu;
