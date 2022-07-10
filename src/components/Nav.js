import { Link } from "react-router-dom";
import basketIcon from "../assets/icons/basket-icon.svg";
import "../styles/Nav.css";

function Nav() {
  return (
    <header>
      <div className="navBar-header">
        <Link to="/">MockShop</Link>
      </div>
      <nav className="navBar">
        <div className="navBar-home">
          <Link to="/">Home</Link>
        </div>
        <div className="navBar-shop">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="navBar-contact">
          <Link to="/contact">Contact</Link>
        </div>
        <button className="navBar-shoppingCart">
          <img alt="shopping basket icon" src={basketIcon}></img>
        </button>
      </nav>
    </header>
  );
}

export default Nav;
