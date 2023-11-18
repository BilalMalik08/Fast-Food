import "./foodMenu.css";
import ChickenMenuLeft from "./ChickenMenuLeft";
import ChickenMenuRight from "./ChickenMenuRight";
import Footer from "./Footer";

function ChickenMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Fried Chicken Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <ChickenMenuLeft />
        </div>
        <div className="col cols-md-6">
          <ChickenMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default ChickenMenu;
