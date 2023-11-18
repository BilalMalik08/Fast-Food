import "./adminFoodMenu.css";
import ChowmeinMenuEditComp from "./ChowmeinMenuEditComp";

function AdminChowmeinMenu() {
  return (
    <>
      <div className="row admin-foodMenu-row1">
        <div className="container admin-foodMenu-btn-container">
          <button
            className="btn admin-foodMenu-btn btn-outline-light"
            type="submit"
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="row admin-foodMenu-row2">
        <ChowmeinMenuEditComp />
      </div>
    </>
  );
}

export default AdminChowmeinMenu;
