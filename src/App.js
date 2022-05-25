import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import teepeeImage from "./assets/images/teepee.png";
import { useState, useEffect } from "react";
import Checkout from "./components/Checkout";

function App() {
  const productsArray = [
    {
      name: "White and Black Teepee",
      description: "Fits 1-2 adults at a time",
      id: "teepee",
      image: teepeeImage,
      price: 24.95,
    },
    {
      name: "Filler",
      description: "Filler",
      id: "Filler",
      image: "Filler",
      price: 0,
    },
  ];

  const basket = {
    itemNumber: 0,
    basketItems: [],
    totalPrice: 0,
    open: false,

    SumBasket() {
      let totalPriceNew = 0;
      for (let i = 0; i < this.basketItems.length; i++) {
        totalPriceNew += this.basketItems.price;
      }
      this.totalPrice = totalPriceNew;
    },
  };

  const [products, setProducts] = useState(productsArray);

  const [shoppingCart, setShoppingCart] = useState(basket);

  useEffect(() => {
    // allow to open and close basket according to whether basket is open or closed
    const checkout = document.querySelector(".navBar-shoppingCart");
    checkout.addEventListener("click", () => {
      console.log("hello");
      if (!basket.open) {
        setShoppingCart((prevState) => {
          let newBasket = { ...prevState.basket };
          newBasket.open = true;
          return newBasket;
        });
      } else if (basket.open) {
        setShoppingCart((prevState) => {
          let newBasket = { ...prevState.basket };
          newBasket.open = false;
          return newBasket;
        });
      }
    });
  }, []);

  useEffect(() => {
    if (basket.open) {
      const checkoutClose = document.querySelector(
        ".checkoutContainer-closeCheckout"
      );
      checkoutClose.addEventListener("click", () => {
        setShoppingCart((prevState) => {
          let newBasket = { ...prevState.basket };
          newBasket.open = false;
          return newBasket;
        });
      });
    }
  }, [basket]);

  useEffect(() => {
    // allow to add items to cart and sum up the price
    const addItemsButtons = document.querySelectorAll(
      ".productsContainer-card-info-addToBasket"
    );
    addItemsButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let target = event.target;
        for (let i = 0; i < productsArray.length; i++) {
          if (productsArray[i].id === target.id) {
            setShoppingCart((prevState) => {
              let newBasket = { ...prevState.basket };
              newBasket.basketItems.push(productsArray[i]);
              newBasket.SumBasket();
              return newBasket;
            });
          }
        }
      });
    });
  });

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {basket.open && <Checkout />}
    </>
  );
}

export default App;
