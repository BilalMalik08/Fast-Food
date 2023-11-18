import "./foodMenu.css";
import React from "react";
import { useParams } from "react-router-dom";
import PizzaMenu from "./PizzaMenu";
import BurgerMenu from "./BurgerMenu";
import SandwichMenu from "./SandwichMenu";
import ChickenMenu from "./ChickenMenu";
import ChowmeinMenu from "./ChowmeinMenu";
import SoupMenu from "./SoupMenu";
import IceCreamMenu from "./IceCreamMenu";
import ColdDrinkMenu from "./ColdDrinkMenu";
import HotDrinkMenu from "./HotDrinkMenu";

const MenuPage = () => {
  const { category } = useParams();

  // Determine which menu component to render based on the category parameter
  let menuComponent;
  if (category === "pizzas") {
    menuComponent = <PizzaMenu />;
  } else if (category === "burgers") {
    menuComponent = <BurgerMenu />;
  } else if (category === "sandwiches") {
    menuComponent = <SandwichMenu />;
  } else if (category === "chickens") {
    menuComponent = <ChickenMenu />;
  } else if (category === "chowmeins") {
    menuComponent = <ChowmeinMenu />;
  } else if (category === "soups") {
    menuComponent = <SoupMenu />;
  } else if (category === "icecreams") {
    menuComponent = <IceCreamMenu />;
  } else if (category === "colddrinks") {
    menuComponent = <ColdDrinkMenu />;
  } else if (category === "hotdrinks") {
    menuComponent = <HotDrinkMenu />;
  } else {
    menuComponent = <div className="menu-not-found">Menu not found</div>;
  }

  return <div>{menuComponent}</div>;
};

export default MenuPage;
