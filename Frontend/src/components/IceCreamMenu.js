import "./foodMenu.css";
import IceCreamMenuLeft from "./IceCreamMenuLeft";
import IceCreamMenuRight from "./IceCreamMenuRight";
import Footer from "./Footer";

function IceCreamMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Ice Cream Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <IceCreamMenuLeft />
        </div>
        <div className="col cols-md-6">
          <IceCreamMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default IceCreamMenu;
