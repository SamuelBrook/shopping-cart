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
    },
  ];

  const [products, setProducts] = useState(productsArray);

  const [showBasket, setShowBasket] = useState(false);

  useEffect(() => {
    const checkout = document.querySelector(".navBar-shoppingCart");
    checkout.addEventListener("click", () => {
      if (!showBasket) {
        setShowBasket(true);
      } else if (showBasket) {
        setShowBasket(false);
      }
    });
  });

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/shop" element={Shop}></Route>
          <Route path="/contact" element={Contact}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {showBasket && <Checkout />}
    </>
  );
}

export default App;
