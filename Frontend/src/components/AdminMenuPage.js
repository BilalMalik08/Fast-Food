import "./foodMenu.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PizzaMenuContainer from "./PizzaMenuContainer";
import BurgerMenuContainer from "./BurgerMenuContainer";
import SandwichMenuContainer from "./SandwichMenuContainer";
import ChickenMenuContainer from "./ChickenMenuContainer";
import ChowmeinMenuContainer from "./ChowmeinMenuContainer";
import SoupMenuContainer from "./SoupMenuContainer";
import IceCreamMenuContainer from "./IceCreamMenuContainer";
import ColdDrinkMenuContainer from "./ColdDrinkMenuContainer";
import HotDrinkMenuContainer from "./HotDrinkMenuContainer";

const AdminMenuPage = () => {
  const { adminCategory } = useParams();
  const navigate = useNavigate();

  // Determine which menu component to render based on the adminCategory parameter
  let adminMenuComponent;
  if (adminCategory === "pizzas") {
    adminMenuComponent = <PizzaMenuContainer />;
  } else if (adminCategory === "burgers") {
    adminMenuComponent = <BurgerMenuContainer />;
  } else if (adminCategory === "sandwiches") {
    adminMenuComponent = <SandwichMenuContainer />;
  } else if (adminCategory === "chickens") {
    adminMenuComponent = <ChickenMenuContainer />;
  } else if (adminCategory === "chowmeins") {
    adminMenuComponent = <ChowmeinMenuContainer />;
  } else if (adminCategory === "soups") {
    adminMenuComponent = <SoupMenuContainer />;
  } else if (adminCategory === "icecreams") {
    adminMenuComponent = <IceCreamMenuContainer />;
  } else if (adminCategory === "colddrinks") {
    adminMenuComponent = <ColdDrinkMenuContainer />;
  } else if (adminCategory === "hotdrinks") {
    adminMenuComponent = <HotDrinkMenuContainer />;
  } else {
    adminMenuComponent = <div className="menu-not-found">Menu not found</div>;
  }

  return <div>{adminMenuComponent}</div>;
};

export default AdminMenuPage;
