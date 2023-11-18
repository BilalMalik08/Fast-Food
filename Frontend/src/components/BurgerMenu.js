import "./foodMenu.css";
import BurgerMenuLeft from "./BurgerMenuLeft";
import BurgerMenuRight from "./BurgerMenuRight";
import Footer from "./Footer";

function BurgerMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Burger Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <BurgerMenuLeft />
        </div>
        <div className="col cols-md-6">
          <BurgerMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default BurgerMenu;
