import { Link } from "react-router-dom";
import basketIcon from "../assets/basket-icon.svg";

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
        <div className="navBar-shop">Shop</div>
        <button className="navBar-shoppingCart">
          <img alt="shopping basket icon" src={basketIcon}></img>
        </button>
      </nav>
    </header>
  );
}

export default Nav;
