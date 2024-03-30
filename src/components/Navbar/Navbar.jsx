import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : null}
          onClick={() => setMenu("home")}
        >
          home
        </Link>

        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : null}
          onClick={() => setMenu("menu")}
        >
          menu
        </a>
        <a
          href="#app-download"
          className={menu === "mobile" ? "active" : null}
          onClick={() => setMenu("mobile")}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          className={menu === "contact" ? "active" : null}
          onClick={() => setMenu("contact")}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
