import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminPizzaMenu from "./AdminPizzaMenu";
import Footer from "./Footer";

function PizzaMenuContainer() {
  const location = useLocation();
  const isPizzaMenuPage = location.pathname === "/admin/menu/pizzas";
  const adminRow3Class = isPizzaMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminPizzaMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default PizzaMenuContainer;
