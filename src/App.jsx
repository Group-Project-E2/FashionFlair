import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./Navigation";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <NewArrivals />
    </main>
  );
}

export default App;
