
// import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
// import Navigation from "./Navigation";
// import Hero from "./Hero";
// import Footer from "./Footer";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import Register from "./login-register components/Register"

// import Login from "./login-register components/Login"

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation is common to all pages */}
//       <Navigation />
      
      
//       {/* Routes for page-specific content */}
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<Hero />} />
        
//         {/* About Us Page */}
//         <Route path="/aboutUs" element={<AboutUs />} />
        
//         {/* Contact Us Page */}
//         <Route path="/contactUs" element={<ContactUs />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
        
//         {/* Fallback Route */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
      
//       {/* Footer is common to all pages */}
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;












// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Navigation from "./Navigation";
// import Hero from "./Hero";
// import Footer from "./Footer";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import Register from "./login-register components/Register";
// import Login from "./login-register components/Login";

// function App() {
//   const location = useLocation();
//   const noNavbarFooter = location.pathname === "/login" || location.pathname === "/register";

//   return (
//     <BrowserRouter>
//       {!noNavbarFooter && <Navigation />}

//       {/* Routes for page-specific content */}
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<Hero />} />

//         {/* About Us Page */}
//         <Route path="/aboutUs" element={<AboutUs />} />

//         {/* Contact Us Page */}
//         <Route path="/contactUs" element={<ContactUs />} />

//         {/* Login Page */}
//         <Route path="/login" element={<Login />} />

//         {/* Register Page */}
//         <Route path="/register" element={<Register />} />

//         {/* Fallback Route */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>

//       {!noNavbarFooter && <Footer />}
//     </BrowserRouter>
//   );
// }

// export default App;










import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
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

        {/* About Us Page */}
        <Route path="/aboutUs" element={<AboutUs />} />

        {/* Contact Us Page */}
        <Route path="/contactUs" element={<ContactUs />} />

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
