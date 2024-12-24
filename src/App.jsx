import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import Register from "./login-register components/Register";
import Login from "./login-register components/Login";

function AppContent() {
  const location = useLocation();
  const noNavbarFooter = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!noNavbarFooter && <Navigation />}

      {/* Routes for page-specific content */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Hero />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!noNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
