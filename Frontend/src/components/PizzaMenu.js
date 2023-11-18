import "./foodMenu.css";
import PizzaMenuLeft from "./PizzaMenuLeft";
import PizzaMenuRight from "./PizzaMenuRight";
import Footer from "./Footer";

function PizzaMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Pizza Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <PizzaMenuLeft />
        </div>
        <div className="col cols-md-6">
          <PizzaMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default PizzaMenu;
