import { Link } from "react-router-dom";

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
        <div className="navBar-shoppingCart"></div>
      </nav>
    </header>
  );
}

export default Nav;
