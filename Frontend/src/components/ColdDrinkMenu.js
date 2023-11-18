import "./foodMenu.css";
import ColdDrinkMenuLeft from "./ColdDrinkMenuLeft";
import ColdDrinkMenuRight from "./ColdDrinkMenuRight";
import Footer from "./Footer";

function ColdDrinkMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Cold Drink Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <ColdDrinkMenuLeft />
        </div>
        <div className="col cols-md-6">
          <ColdDrinkMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default ColdDrinkMenu;
