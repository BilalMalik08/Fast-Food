import "./foodMenu.css";
import HotDrinkMenuLeft from "./HotDrinkMenuLeft";
import HotDrinkMenuRight from "./HotDrinkMenuRight";
import Footer from "./Footer";

function HotDrinkMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Hot Drink Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <HotDrinkMenuLeft />
        </div>
        <div className="col cols-md-6">
          <HotDrinkMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default HotDrinkMenu;
