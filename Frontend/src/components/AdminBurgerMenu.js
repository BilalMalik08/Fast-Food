import "./adminFoodMenu.css";
import BurgerMenuEditComp from "./BurgerMenuEditComp";

function AdminBurgerMenu() {
  return (
    <>
      <div className="row admin-foodMenu-row1">
        <div className="container admin-foodMenu-btn-container">
          <button
            className="btn admin-foodMenu-btn btn-outline-dark"
            type="submit"
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="row admin-foodMenu-row2">
        <BurgerMenuEditComp />
      </div>
    </>
  );
}

export default AdminBurgerMenu;
