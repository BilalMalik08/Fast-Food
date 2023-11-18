import Footer from "./Footer";
import MenuCard from "./MenuCard";
import "./menu.css";

function Menu() {
  return (
    <>
      <div className="row menu-row1">
        <h1>Our Menu</h1>
      </div>

      <MenuCard />

      <div className="row menu-row2">
        <Footer />
      </div>
    </>
  );
}

export default Menu;
