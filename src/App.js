import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import teepeeImage from "./assets/images/teepee.png";
import { useState } from "react";

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
    </>
  );
}

export default App;
