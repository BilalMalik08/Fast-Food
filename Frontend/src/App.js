import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import PizzaMenu from "./components/PizzaMenu";
import BurgerMenu from "./components/BurgerMenu";
import SandwichMenu from "./components/SandwichMenu";
import ChickenMenu from "./components/ChickenMenu";
import ChowmeinMenu from "./components/ChowmeinMenu";
import SoupMenu from "./components/SoupMenu";
import IceCreamMenu from "./components/IceCreamMenu";
import ColdDrinkMenu from "./components/ColdDrinkMenu";
import HotDrinkMenu from "./components/HotDrinkMenu";
import MenuPage from "./components/MenuPage";
import Contact from "./components/Contact";
import AdminLoginForm from "./components/AdminLoginForm";
import AdminDashboardContainer from "./components/AdminDashboardContainer";
import AdminMenuContainer from "./components/AdminMenuContainer";
import AdminMenuPage from "./components/AdminMenuPage";
import AdminOrdersContainer from "./components/AdminOrdersContainer";
import AdminCustomersContainer from "./components/AdminCustomersContainer";
import AdminSettingsContainer from "./components/AdminSettingsContainer";
import AdminFeedbackContainer from "./components/AdminFeedbackContainer";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import ConfirmOrder from "./components/ConfirmOrder";
import Login from "./components/Login";
import ThankYou from "./components/ThankYou";
import Reviews from "./components/Reviews";
import Complaints from "./components/Complaints";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pizzamenu" element={<PizzaMenu />} />
          <Route path="/burgermenu" element={<BurgerMenu />} />
          <Route path="/sandwichmenu" element={<SandwichMenu />} />
          <Route path="/chickenmenu" element={<ChickenMenu />} />
          <Route path="/chowmeinmenu" element={<ChowmeinMenu />} />
          <Route path="/soupmenu" element={<SoupMenu />} />
          <Route path="/icecreammenu" element={<IceCreamMenu />} />
          <Route path="/colddrinkmenu" element={<ColdDrinkMenu />} />
          <Route path="/hotdrinkmenu" element={<HotDrinkMenu />} />
          <Route path="/menu/:category" element={<MenuPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/adminlogin" element={<AdminLoginForm />} />
          <Route path="/dashboard" element={<AdminDashboardContainer />} />
          <Route path="/adminmenu" element={<AdminMenuContainer />} />
          <Route
            path="/admin/menu/:adminCategory"
            element={<AdminMenuPage />}
          />
          <Route path="/orders" element={<AdminOrdersContainer />} />
          <Route path="/customers" element={<AdminCustomersContainer />} />
          <Route path="/settings" element={<AdminSettingsContainer />} />
          <Route path="/feedbacks" element={<AdminFeedbackContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orderconfirmation" element={<ConfirmOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
