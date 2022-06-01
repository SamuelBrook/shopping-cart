function Shop(props) {
  const { products, addToBasket } = props;
  return (
    <main>
      <div className="productsContainer">
        {products.map((product) => {
          return (
            <div className="productsContainer-card" key={product.id}>
              <div className="productsContainer-card-imageContainer">
                <img
                  className="productImage"
                  alt={product.name}
                  src={product.image}
                ></img>
              </div>
              <div className="productsContainer-card-info">
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price}</div>
                <button
                  className="productsContainer-card-addToBasket"
                  id={product.id}
                  onClick={addToBasket}
                >
                  Add to basket
                </button>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </main>
  );
}

export default Shop;
