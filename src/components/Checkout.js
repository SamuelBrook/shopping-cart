import { Link } from "react-router-dom";

function Checkout(props) {
  const { shoppingBasket, toggleNumber, basketTotal } = props;

  return (
    <div className="checkoutContainer">
      <div className="checkoutContainer-itemsContainer">
        {shoppingBasket.map((basketItem) => {
          return (
            <div className="itemCard" key={basketItem.id}>
              <div className="itemCard-imageContainer">
                <img alt={basketItem.name} src={basketItem.image}></img>
              </div>
              <div className="itemCard-info">
                <div className="itemCard-info-name">{basketItem.name}</div>
                <div className="itemCard-info-price">
                  £ {basketItem.price * basketItem.number}
                </div>
                <div className="itemCard-info-incrementNumber">
                  <button
                    className="addItem"
                    id={basketItem.id}
                    onClick={toggleNumber}
                  >
                    +
                  </button>
                  <div>{basketItem.number}</div>
                  <button
                    className="subtractItem"
                    id={basketItem.id}
                    onClick={toggleNumber}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkoutContainer-totalPrice">Total: £ {basketTotal}</div>
      <button className="checkoutContainer-checkoutButton">
        <Link to="/">Checkout</Link>
      </button>
      <button className="checkoutContainer-closeCheckout">Close</button>
    </div>
  );
}

export default Checkout;
