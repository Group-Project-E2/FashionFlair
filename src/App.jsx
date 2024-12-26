import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./Navigation";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/Home" element={[<Hero key="hero" />, <NewArrivals key="new-arrivals" />]} />
        <Route path="/Shop" element={<Shop />} />
       {/* to view the productdetails */}
        <Route path="/products/:product_id" element={<ProductDetails />} />
      </Routes>

    </Router>
  );
}

export default App;
