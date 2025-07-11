// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

import "./index.css";

function App() {
  return (
    <Router>
      
      <div className="bg-cream min-h-screen">
        <Navbar />
        <main className="pt-24 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;