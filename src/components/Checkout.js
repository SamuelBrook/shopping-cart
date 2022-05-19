function Checkout(props) {
  const { basket } = props;
  const { basketArray } = props;

  return (
    <div className="checkoutContainer">
      <div className="checkoutContainer-itemsContainer">
        {basketArray.map((basketItem) => {
          return (
            <div className="itemCard">
              <div className="itemCard-imageContainer">
                <img alt={basketItem.name}>{basketItem.image}</img>
              </div>
              <div className="itemCard-info">
                <div className="itemCard-info-name">{basketItem.name}</div>
                <div className="itemCard-info-price">{basketItem.price}</div>
                <div className="itemCard-info-incrementNumber">
                  <button></button>
                  <div>{basketItem.number}</div>
                  <button></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkoutContainer-totalPrice">Total: {basket.total}</div>
    </div>
  );
}

export default Checkout;
