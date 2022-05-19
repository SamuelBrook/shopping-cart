function Shop(props) {
  const { productsArray } = props;
  return (
    <main>
      <div className="productsContainer">
        {productsArray.map((product) => {
          return (
            <div className="productsContainer-card">
              <div className="productsContainer-card-imageContainer">
                <img className="productImage" alt={product.description}></img>
              </div>
              <div className="productsContainer-card-info">
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price}</div>
                <button>Add to basket</button>
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
