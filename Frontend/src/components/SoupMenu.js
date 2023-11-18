import "./foodMenu.css";
import SoupMenuLeft from "./SoupMenuLeft";
import SoupMenuRight from "./SoupMenuRight";
import Footer from "./Footer";

function SoupMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Soup Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <SoupMenuLeft />
        </div>
        <div className="col cols-md-6">
          <SoupMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default SoupMenu;
