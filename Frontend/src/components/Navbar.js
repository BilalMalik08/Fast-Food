import "./navbar.css";
import FastFoodLogo from "../Img/FastFoodLogo.png";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { cartItems, updateCartItem } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  // Update cartCount whenever cartItems change
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <>
      <div className="row navbar-row1">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <img className="logo" src={FastFoodLogo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link !active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/menu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu List
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/menu">
                        Menu
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Link className="dropdown-item" to="/pizzamenu">
                        Pizza Menu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/burgermenu">
                        Burger Menu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sandwichmenu">
                        Sandwich Menu
                      </Link>
                    </li>
                    <li>
                      <li>
                        <Link className="dropdown-item" to="/chickenmenu">
                          Fried Chicken Menu
                        </Link>
                      </li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/soupmenu">
                        Soups Menu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/chowmeinmenu">
                        Chowmein Menu
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Link className="dropdown-item" to="/icecreammenu">
                        Ice Cream Menu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/colddrinkmenu">
                        Cold Drink Menu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/hotdrinkmenu">
                        Hot Drink Menu
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/reviews">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link admin-link" to="/adminlogin">
                    Admin
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
              <Link to="/cart" className="shopping-cart position-relative">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="position-absolute top-0 start-100 translate-middle badge cart-badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">Cart Items</span>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
