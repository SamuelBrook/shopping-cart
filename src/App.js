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
      number: 1,
    },
    {
      name: "Filler",
      description: "Filler",
      id: "Filler",
      image: "Filler",
      price: 0,
      number: 1,
    },
  ];

  const [totalPrice, setTotalPrice] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);

  const [basketOpen, setBasketOpen] = useState(false);

  // sum up price of items
  useEffect(() => {
    if (shoppingCart.length > 0) {
      let total = 0;
      for (let i = 0; i < shoppingCart.length; i++) {
        total = shoppingCart[i].number * shoppingCart[i].price;
      }
      setTotalPrice(total);
    }
  }, [shoppingCart]);

  useEffect(() => {
    // allow to open and close basket according to whether basket is open or closed
    function ToggleBasketOpen() {
      !basketOpen ? setBasketOpen(true) : setBasketOpen(false);
    }
    const checkoutButton = document.querySelector(".navBar-shoppingCart");
    checkoutButton.addEventListener("click", ToggleBasketOpen);
    return () => {
      checkoutButton.removeEventListener("click", ToggleBasketOpen);
    };
  });

  useEffect(() => {
    function CloseBasket() {
      setBasketOpen(false);
    }
    if (basketOpen) {
      const checkoutClose = document.querySelector(
        ".checkoutContainer-closeCheckout"
      );

      checkoutClose.addEventListener("click", CloseBasket);
      return () => {
        checkoutClose.removeEventListener("click", CloseBasket);
      };
    }
  }, [basketOpen]);

  // allow to add items to cart
  const AddItemsToCart = (event) => {
    let target = event.target;

    function AddItem() {
      for (let i = 0; i < productsArray.length; i++) {
        if (target.id === productsArray[i].id) {
          let clickedItem = productsArray[i];
          setShoppingCart((prevstate) => [...prevstate, clickedItem]);
        }
      }
    }

    if (shoppingCart.length < 1) {
      AddItem();
    } else {
      let existsInCart = false;
      for (let i = 0; i < shoppingCart.length; i++) {
        if (target.id === shoppingCart[i].id) {
          existsInCart = true;
        }
      }
      if (existsInCart) {
        setShoppingCart((prevstate) => {
          let newArray = [...prevstate];
          let newState = newArray.map((obj) => {
            if (obj.id === target.id) {
              let newNumVal = obj.number + 1;
              return { ...obj, number: newNumVal };
            }
            return obj;
          });

          return newState;
        });
      } else {
        AddItem();
      }
    }
  };

  const ToggleItemNumber = (event) => {
    const target = event.target;
    if (target.className === "addItem") {
      AddItemsToCart(event);
    } else {
      setShoppingCart((prevstate) => {
        let newArray = [...prevstate];
        let newState = newArray.map((obj) => {
          if (obj.id === target.id) {
            let newNumVal = obj.number - 1;
            return { ...obj, number: newNumVal };
          }
          return obj;
        });

        return newState;
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/shop"
            element={
              <Shop products={productsArray} addToBasket={AddItemsToCart} />
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
        {basketOpen && (
          <Checkout
            shoppingBasket={shoppingCart}
            toggleNumber={ToggleItemNumber}
            basketTotal={totalPrice}
          />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
