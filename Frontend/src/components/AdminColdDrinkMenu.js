import "./adminFoodMenu.css";
import ColdDrinkMenuEditComp from "./ColdDrinkMenuEditComp";

function AdminColdDrinkMenu() {
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
        <ColdDrinkMenuEditComp />
      </div>
    </>
  );
}

export default AdminColdDrinkMenu;
