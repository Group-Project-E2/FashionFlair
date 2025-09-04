import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./Navigation";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";
import CartPage from "./CartPage";
import { CartProvider } from "./CartContext";
import BillingDetails from "./BillingDetails";
import Checkout from "./Checkout";
import SuccessPayment from "./landing_pages/SuccessPayment.jsx"
function App() {
  
  return (
    
    <CartProvider>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/Home" element={[<Hero key="hero" />, <NewArrivals key="new-arrivals" />]} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/products/:product_id" element={<ProductDetails />} />{/* to view the productdetails */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/billingdetails" element={<BillingDetails/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentsuccess/:orderId" element={<SuccessPayment />} />
      </Routes>

    </Router>
    </CartProvider>
  );
}

export default App;
