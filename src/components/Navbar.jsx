import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

import {  useSelector } from "react-redux/es/hooks/useSelector";
const Navbar = () => {

  const cartProduct=useSelector(state=>state.cart)
  return (
    <>
      <section className="header">
        <div className="first">
          <Link to="/">Redux Toolkit</Link>
          <Link to="/dashboard">Products</Link>
        </div>
        <div className="second">
          <Link to="/cart">My Bag {cartProduct.length}</Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
