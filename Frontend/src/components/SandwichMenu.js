import "./foodMenu.css";
import SandwichMenuLeft from "./SandwichMenuLeft";
import SandwichMenuRight from "./SandwichMenuRight";
import Footer from "./Footer";

function SandwichMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Sandwich Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <SandwichMenuLeft />
        </div>
        <div className="col cols-md-6">
          <SandwichMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default SandwichMenu;
