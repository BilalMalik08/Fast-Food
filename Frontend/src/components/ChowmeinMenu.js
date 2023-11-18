import "./foodMenu.css";
import ChowmeinMenuLeft from "./ChowmeinMenuLeft";
import ChowmeinMenuRight from "./ChowmeinMenuRight";
import Footer from "./Footer";

function ChowmeinMenu() {
  return (
    <>
      <div className="row foodMenu-row1">
        <h1>
          <ul>
            <li>Chowmein Menu</li>
          </ul>
        </h1>
      </div>
      <div className="row foodMenu-row2">
        <div className="col cols-md-6 food-item-col">
          <ChowmeinMenuLeft />
        </div>
        <div className="col cols-md-6">
          <ChowmeinMenuRight />
        </div>
      </div>

      <div className="row foodMenu-row3">
        <Footer />
      </div>
    </>
  );
}

export default ChowmeinMenu;
