import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminBurgerMenu from "./AdminBurgerMenu";
import Footer from "./Footer";

function BurgerMenuContainer() {
  const location = useLocation();
  const isBurgerMenuPage = location.pathname === "/admin/menu/burgers";
  const adminRow3Class = isBurgerMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminBurgerMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default BurgerMenuContainer;
