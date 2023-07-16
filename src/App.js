import React from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";

import Cart from "./components/Cart";
import DashBoard from "./components/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
